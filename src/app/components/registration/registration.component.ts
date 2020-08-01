import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormValidationService } from '../../form-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = this.formBuilder.group({
    emailAddress: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    public validation: FormValidationService) { }

  ngOnInit(): void {
  }

  get emailAddress(): AbstractControl {
    return this.registrationForm.controls["emailAddress"];
  }

  get password(): AbstractControl {
    return this.registrationForm.controls["password"];
  }

  get confirmPassword(): AbstractControl {
    return this.registrationForm.controls["confirmPassword"];
  }

  get firstName(): AbstractControl {
    return this.registrationForm.controls["firstName"];
  }

  get lastName(): AbstractControl {
    return this.registrationForm.controls["lastName"];
  }

  getInputClass(field: AbstractControl): string {
    if (!field.dirty) {
      return '';
    }

    if (this.validation.isFormFieldValid(field)) {
      return 'is-valid';
    } else {
      return 'is-invalid';
    }
  }

  getFeedbackClass(field: AbstractControl): string {
    if (!field.dirty) {
      return '';
    }

    if (this.validation.isFormFieldValid(field)) {
      return 'valid-feedback';
    } else {
      return 'invalid-feedback';
    }
  }
}
