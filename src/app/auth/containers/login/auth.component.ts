import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'),
      ]),
    });
  }

  public submit(): void {
    this.authService.login(this.loginForm.value);
    this.router.navigate(['store']);
  }

  public goToResetPassword(): void {
    if (this.loginForm.get('email').valid) {
      const emailValue = this.loginForm.get('email').value;
      this.router.navigate(['reset-password'], { queryParams: { email: emailValue } });
    } else {
      this.loginForm.get('email').markAsTouched();
    }
  }
}
