import { Component, OnInit, Input } from '@angular/core';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input()
  public readonly type: string;

  @Input()
  public readonly parent: FormGroup;
  
  @Input()
  public readonly field: FormControl;

  @Input()
  public readonly fieldName: string;

  public fieldId: string;

  constructor(public validation: FormValidationService) { }

  ngOnInit(): void {
    Object.keys(this.parent.controls).forEach(key => {
      if (this.parent.controls[key] === this.field) {
        this.fieldId = key;
      }
    });
  }

  getInputClass(): string {
    if (!this.field.dirty) {
      return '';
    }

    if (this.validation.isFormFieldValid(this.field)) {
      return 'is-valid';
    } else {
      return 'is-invalid';
    }
  }

  getFeedbackClass(): string {
    if (!this.field.dirty) {
      return '';
    }

    if (this.validation.isFormFieldValid(this.field)) {
      return 'valid-feedback';
    } else {
      return 'invalid-feedback';
    }
  }
}
