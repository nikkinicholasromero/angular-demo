import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidators } from '../../validators/custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = this.formBuilder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  },{ 
    validators: CustomValidators.customPasswordValidator
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    Object.keys(this.registrationForm.controls).forEach(key => {
      this.registrationForm.controls[key].markAsDirty();
      this.registrationForm.controls[key].updateValueAndValidity();
    });
  }
}
