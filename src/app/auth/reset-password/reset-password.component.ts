import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;
  public emailValue: string;
  public submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
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
        validators: [
          Validators.required,
        ],
        updateOn: 'submit',
      }),
    }, [this.isMatched]);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.emailValue = params.email;
    });
  }

  public isMatched(form: AbstractControl): ValidationErrors | null {
    const newPassword: string = form.get('newPassword').value;
    const repeatPassword: string = form.get('repeatPassword').value;

    return newPassword === repeatPassword ? null : { passwordMatch: true };
  }

  public submit(): void {
    this.submitted = true;
    if (this.resetPasswordForm.valid) {
      this.updatePassword();
      this.router.navigate(['store']);
    }
  }

  public updatePassword(): void {
    const newUser: IUser = {
      email: this.emailValue,
      password: this.resetPasswordForm.get('repeatPassword').value,
    };
    this.authService.login(newUser);
  }

}
