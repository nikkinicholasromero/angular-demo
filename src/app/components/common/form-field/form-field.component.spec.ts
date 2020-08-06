import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComponent } from './form-field.component';
import { FormValidationService } from '../../../services/form-validation.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

describe('FormFieldComponent', () => {
    class MockFormValidationService {
        public isFormFieldValid(field: AbstractControl): boolean {
            return (field.value) ? true : false;
        }
    }
    
    @Component({
        template: `
          <app-form-field
           [type]="'password'" [parent]="formGroup"
           [field]="this.formGroup.controls['password']" [fieldName]="'Password'">
          </app-form-field>`
    })
    class TestHostComponent {
        formField: FormFieldComponent;

        public formGroup: FormGroup = new FormGroup({
            emailAddress: new FormControl(['', [Validators.required]]),
            password: new FormControl(['', [Validators.required]])
        });

        @ViewChild(FormFieldComponent)
        set setFormField(formField: FormFieldComponent) {
            this.formField = formField;
        };
    }

    let hostFixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormFieldComponent, TestHostComponent],
            providers: [{provide: FormValidationService, useClass: MockFormValidationService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(hostComponent.formField).toBeTruthy();
    });

    it('should return empty string when getInputClass() is called and field is not dirty', () => {
        expect(hostComponent.formField.getInputClass()).toEqual('');
    });

    it('should return empty string when getInputClass() is called and field is dirty', () => {
        hostComponent.formField.field.setValue('');
        hostComponent.formField.field.markAsDirty();
        hostComponent.formField.field.updateValueAndValidity();
        expect(hostComponent.formField.getInputClass()).toEqual('is-invalid');
    });

    it('should return empty string when getInputClass() is called and field is dirty', () => {
        hostComponent.formField.field.setValue('Basdf1g');
        hostComponent.formField.field.markAsDirty();
        hostComponent.formField.field.updateValueAndValidity();
        expect(hostComponent.formField.getInputClass()).toEqual('is-valid');
    });

    it('should return empty string when getFeedbackClass() is called and field is not dirty', () => {
        expect(hostComponent.formField.getFeedbackClass()).toEqual('');
    });

    it('should return empty string when getFeedbackClass() is called and field is dirty', () => {
        hostComponent.formField.field.setValue('Basdf1g');
        hostComponent.formField.field.markAsDirty();
        hostComponent.formField.field.updateValueAndValidity();
        expect(hostComponent.formField.getFeedbackClass()).toEqual('valid-feedback');
    });

    it('should return empty string when getFeedbackClass() is called and field is dirty', () => {
        hostComponent.formField.field.setValue('');
        hostComponent.formField.field.markAsDirty();
        hostComponent.formField.field.updateValueAndValidity();
        expect(hostComponent.formField.getFeedbackClass()).toEqual('invalid-feedback');
    });
});
