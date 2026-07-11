import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-form.html'
})
export class InputFormComponent {

  // Custom validator: names cannot contain numbers
  noNumbers(control: AbstractControl) {
    if (/[0-9]/.test(control.value)) {
      return { hasNumber: true };
    }

    return null;
  }

  // Async validator: checks if an email is already taken
  emailValidator(control: AbstractControl) {
    const isTaken = control.value === 'test@test.com';

    return of(isTaken ? { emailTaken: true } : null)
      .pipe(delay(1000));
  }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      this.noNumbers
    ]),

    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ],
      [
        this.emailValidator
      ]
    ),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),

    skills: new FormArray([
      new FormControl('', Validators.required)
    ])
  });

  // Get the skills FormArray
  get skills() {
    return this.form.get('skills') as FormArray;
  }

  // Add a skill
  addSkill() {
    this.skills.push(
      new FormControl('', Validators.required)
    );
  }

  // Remove a skill
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  // Submit the form
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
