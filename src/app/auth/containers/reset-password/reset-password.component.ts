import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from '../../../models/user.interface';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  public resetPasswordForm: FormGroup;
  public emailValue: string;
  public submitted = false;
  public destroy$: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
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

    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.emailValue = params.email;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
