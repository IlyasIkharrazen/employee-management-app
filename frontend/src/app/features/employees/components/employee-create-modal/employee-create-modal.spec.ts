import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeCreateModal } from './employee-create-modal';

describe('EmployeeCreateModal', () => {
  let component: EmployeeCreateModal;
  let fixture: ComponentFixture<EmployeeCreateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreateModal],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
