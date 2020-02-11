import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class AuthServiceStub {
  public login(): void { }
}

describe('AuthComponent', () => {
  let authService: AuthService;
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ AuthComponent ],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceStub,
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.debugElement.componentInstance;
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('actions', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should be valid', () => {
      const spy = spyOn(authService, 'login');
      component.submit();
      expect(spy).toHaveBeenCalled();
    });

    it('should create form with 2 controls', () => {
      expect(component.loginForm.contains('email')).toBeTruthy();
      expect(component.loginForm.contains('password')).toBeTruthy();
    });

    it('should navigate to store page', () => {
      const spy = spyOn(router, 'navigate');
      component.submit();
      expect(spy).toHaveBeenCalledWith(['store']);
    });

    it('should navigate to reset password page', () => {
      const spyRouter = spyOn(router, 'navigate');
      const spyForm = spyOn(component.loginForm.get('email'), 'markAsTouched');
      component.goToResetPassword();
      if (component.loginForm.valid) {
        expect(spyRouter).toHaveBeenCalledWith(['reset-password'], { queryParams: { email: '' } });
      } else {
        expect(spyForm).toHaveBeenCalled();
      }
    });
  });
});
