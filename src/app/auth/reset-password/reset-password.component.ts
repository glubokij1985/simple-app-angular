import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;

  constructor(private router: Router) {
    this.resetPasswordForm = new FormGroup({
      'newPassword': new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'),
      ]),
      'repeatPassword': new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'),
      ]),
    });
  }

  ngOnInit() {
  }

  public isMatched(form: FormGroup): boolean {
    let newPassword: string = form.get('newPassword').value;
    let repeatPassword: string = form.get('repeatPassword').value;

    return newPassword == repeatPassword;
  }

  public submit(): void {
    console.log(this.isMatched(this.resetPasswordForm));
    this.updatePassword();
    this.router.navigate(['login']);
  }

  public updatePassword(): void {
    let oldUserInfo: IUser = JSON.parse(localStorage.getItem('user'));
    oldUserInfo.password = this.resetPasswordForm.value.repeatPassword;
    localStorage.setItem('user', JSON.stringify(oldUserInfo));
  }

}
