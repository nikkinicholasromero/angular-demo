import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  private readonly ERROR_MESSAGE_MAP: Map<string, (field: string) => string> = new Map([
      ["required", (field: string) => `${field} is required`],
      ["email", (field: string) => `${field} should be a valid email address`]
  ]);

  constructor() { }

  isFormFieldValid(field: AbstractControl): boolean {
    return (field.dirty && field.valid);
  }

  getErrorMessage(field: AbstractControl, fieldName: string): string | null {
    const errors: ValidationErrors = field.errors;
    for (const error in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, error)) {
        return this.ERROR_MESSAGE_MAP.get(error)(fieldName);
      }
    }

    return "Looks good!";
  }
}
