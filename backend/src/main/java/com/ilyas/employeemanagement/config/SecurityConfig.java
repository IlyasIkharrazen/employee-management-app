package com.ilyas.employeemanagement.config;

import com.ilyas.employeemanagement.security.CustomUserDetailsService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.session.ChangeSessionIdAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;


@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(auth ->
                        auth
                                .requestMatchers("/auth/**").permitAll()
                                .requestMatchers(HttpMethod.GET, "/employees/**")
                                .hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.POST, "/employees/**")
                                .hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/employees/**")
                                .hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/employees/**")
                                .hasRole("ADMIN")
                                .anyRequest().authenticated()
                ).httpBasic(Customizer.withDefaults()).
        logout(logout -> logout
                .logoutUrl("/auth/logout")
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessHandler((request, response, authentication) ->
                        response.setStatus(HttpServletResponse.SC_OK))
        );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(CustomUserDetailsService customUserDetailsService, PasswordEncoder passwordEncoder){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(customUserDetailsService);
        provider.setPasswordEncoder(passwordEncoder);

        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationProvider authenticationProvider){
        return new ProviderManager(authenticationProvider);
    }

    @Bean
    public SessionAuthenticationStrategy sessionAuthenticationStrategy(){
        return new ChangeSessionIdAuthenticationStrategy();
    }
}
