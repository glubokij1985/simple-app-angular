import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [LocalService],
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private localService: LocalService,
    private router: Router,
  ) {
    if (this.localService.getStorage('user')) {
      this.router.navigate(['store']);
    }

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

  ngOnInit() {
  }

  public submit(): void {
    this.localService.setStorage('user', this.loginForm.value);
    this.router.navigate(['store']);
  }

  public goToResetPassword(): void {
    if (this.loginForm.get('email').valid) {
    // if (this.loginForm.get('email').valid &&
    // (this.localServise.getStorage('user') &&
    // this.loginForm.get('email').value === JSON.parse(this.localService.getStorage('user')).email)) {
      this.router.navigate(['reset-password']);
    } else {
      this.loginForm.get('email').markAsTouched();
    }
  }

}
