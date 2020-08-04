import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { FormBuilder, Validators } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize its properties', () => {
    expect(component.isProcessing).toBeFalse();
    expect(component.registrationForm).not.toBeNull();
    expect(component.registrationForm.controls['emailAddress']).not.toBeNull();
    expect(component.registrationForm.controls['password']).not.toBeNull();
    expect(component.registrationForm.controls['confirmPassword']).not.toBeNull();
    expect(component.registrationForm.controls['firstName']).not.toBeNull();
    expect(component.registrationForm.controls['lastName']).not.toBeNull();

    expect(component.registrationForm.controls['emailAddress'].value).toEqual('');
    expect(component.registrationForm.controls['password'].value).toEqual('');
    expect(component.registrationForm.controls['confirmPassword'].value).toEqual('');
    expect(component.registrationForm.controls['firstName'].value).toEqual('');
    expect(component.registrationForm.controls['lastName'].value).toEqual('');
  });

  it('should display "Processing..." when form is valid', () => {
    component.registrationForm.controls['emailAddress'].setValue("some@email.com");
    component.registrationForm.controls['password'].setValue("Some password");
    component.registrationForm.controls['confirmPassword'].setValue("Some password");
    component.registrationForm.controls['firstName'].setValue("Some first name");
    component.registrationForm.controls['lastName'].setValue("Some last name");

    component.onSubmit();

    expect(component.isProcessing).toBeTrue();
    expect(component.registrationForm.disabled).toBeTrue();
    Object.keys(component.registrationForm.controls).forEach(key => {
      expect(component.registrationForm.controls[key].dirty).toBeFalse();
    });
  });

  it('should display not "Processing..." when form is invalid', () => {
    component.registrationForm.controls['emailAddress'].setValue("some_invalid_email.com");
    component.registrationForm.controls['password'].setValue("Some password");
    component.registrationForm.controls['confirmPassword'].setValue("Some password");
    component.registrationForm.controls['firstName'].setValue("Some first name");
    component.registrationForm.controls['lastName'].setValue("Some last name");

    component.onSubmit();

    expect(component.isProcessing).toBeFalse();
    expect(component.registrationForm.disabled).toBeFalse();
    Object.keys(component.registrationForm.controls).forEach(key => {
      expect(component.registrationForm.controls[key].dirty).toBeTrue();
    });
  });
});
