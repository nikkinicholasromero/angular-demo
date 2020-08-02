  import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  private readonly ERROR_MESSAGE_MAP: Map<string, (field: string, errorDetails: any) => string> = new Map([
      ["required", (field: string, errorDetails: any) => `${field} is required`],
      ["email", (field: string, errorDetails: any) => `${field} should be a valid email address`],
      ["minlength", (field: string, errorDetails: any) => `${field} should be at least ${errorDetails.requiredLength} characters long`]
  ]);

  constructor() { }

  isFormFieldValid(field: AbstractControl): boolean {
    return (field.dirty && field.valid);
  }

  getErrorMessage(field: AbstractControl, fieldName: string): string | null {
    const errors: ValidationErrors = field.errors;
    for (const error in errors) {
      console.log(errors[error]);
      if (Object.prototype.hasOwnProperty.call(errors, error)) {
        return this.ERROR_MESSAGE_MAP.get(error)(fieldName, errors[error]);
      }
    }

    return "Looks good!";
  }
}
