import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteEmployeeModal } from './delete-employee-modal';

describe('DeleteEmployeeModal', () => {
  let component: DeleteEmployeeModal;
  let fixture: ComponentFixture<DeleteEmployeeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmployeeModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
