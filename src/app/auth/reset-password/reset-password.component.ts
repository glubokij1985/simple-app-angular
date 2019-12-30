import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
      newPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}'),
        ],
        updateOn: 'submit',
      }),
      repeatPassword: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
    }, [this.isMatched]);
  }

  ngOnInit() {
  }

  public isMatched(form: AbstractControl): ValidationErrors | null {
    const newPassword: string = form.get('newPassword').value;
    const repeatPassword: string = form.get('repeatPassword').value;

    return newPassword === repeatPassword ? null : { passwordMatch: true };
  }

  public submit(): void {
    this.updatePassword();
    this.router.navigate(['login']);
  }

  public updatePassword(): void {
    const oldUserInfo: IUser = JSON.parse(localStorage.getItem('user'));
    oldUserInfo.password = this.resetPasswordForm.value.repeatPassword;
    localStorage.setItem('user', JSON.stringify(oldUserInfo));
  }

}
