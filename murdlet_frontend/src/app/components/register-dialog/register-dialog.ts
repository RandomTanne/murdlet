import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register-dialog.html',
})
export class RegisterDialog {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<RegisterDialog>);

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    console.log('Registering...', this.registerForm.value);

    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}