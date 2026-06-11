import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDialog } from '../components/register-dialog/register-dialog';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    console.log('Logging in...', this.loginForm.value);
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(registered => {
      if (registered) {
        this.router.navigate(['/login']);
      }
    });
  }
}