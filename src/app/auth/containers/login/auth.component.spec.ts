import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

class AuthServiceStub {
  public login(): void { }
}

describe('AuthComponent', () => {
  let authService: AuthService;
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ AuthComponent ],
      providers: [{
        provide: AuthService,
        useClass: AuthServiceStub,
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.debugElement.componentInstance;
    authService = TestBed.get(AuthService);
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
  });
});