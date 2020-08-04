import { TestBed } from '@angular/core/testing';

import { FormValidationService } from './form-validation.service';
import { FormControl, Validators } from '@angular/forms';

describe('FormValidationService', () => {
  let service: FormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false when field is not dirty and not valid', () => {
    const field = new FormControl('', Validators.required);
    field.markAsUntouched();

    expect(service.isFormFieldValid(field)).toBeFalse();
  });

  it('should return false when field is not dirty but valid', () => {
    const field = new FormControl('some value', Validators.required);
    field.markAsUntouched();

    expect(service.isFormFieldValid(field)).toBeFalse();
  });

  it('should return false when field is dirty but not valid', () => {
    const field = new FormControl('', Validators.required);
    field.markAsTouched();

    expect(service.isFormFieldValid(field)).toBeFalse();
  });

  it('should return true when field is dirty and valid', () => {
    const field = new FormControl('some value', Validators.required);
    field.markAsTouched();

    expect(service.isFormFieldValid(field)).toBeFalse();
  });

  it('should return "Looks good!" if there is no error', () => {
    const field = new FormControl('some value', Validators.required);

    expect(service.getErrorMessage(field, "Some name")).toEqual("Looks good!");
  });

  it('should return "${fieldName} is require" if value is missing', () => {
    const field = new FormControl('', Validators.required);

    expect(service.getErrorMessage(field, "Some name")).toEqual("Some name is required");
  });

  it('should return ""This field should be a valid email address" if value it is not a valid email address', () => {
    const field = new FormControl('abc', Validators.email);

    expect(service.getErrorMessage(field, "Email Address")).toEqual("This field should be a valid email address");
  });

  it('should return "Password should be at least 10 characters long" if value is less than the minimum', () => {
    const field = new FormControl('abcde', Validators.minLength(10));

    expect(service.getErrorMessage(field, "Password")).toEqual("Password should be at least 10 characters long");
  });

  it('should return "Passwords does not match" if they do not', () => {
    const field = new FormControl('abcde', Validators.minLength(10));
    field.setErrors({ passwordDoesNotMatch: true });

    expect(service.getErrorMessage(field, "Confirm Password")).toEqual("Passwords does not match");
  });
});
