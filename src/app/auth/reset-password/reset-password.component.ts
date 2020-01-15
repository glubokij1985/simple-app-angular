import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../../core/storage/local.service';
import { IUser } from '../../models/user.interface';
import { USER_KEY } from '../../core/storage/local-storage-keys.const';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [LocalService],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;

  constructor(
    private localService: LocalService,
    private router: Router,
  ) {
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
    this.router.navigate(['store']);
  }

  public updatePassword(): void {
    if (this.isMatched()) {
      const oldUserInfo: IUser = this.localService.getStorage(USER_KEY);
      oldUserInfo.password = this.resetPasswordForm.value.repeatPassword;
      this.localService.setStorage(USER_KEY, oldUserInfo);
    }
  }

}
