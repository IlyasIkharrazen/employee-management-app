import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PutEmployeeModal } from './put-employee-modal';

describe('PutEmployeeModal', () => {
  let component: PutEmployeeModal;
  let fixture: ComponentFixture<PutEmployeeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutEmployeeModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PutEmployeeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
