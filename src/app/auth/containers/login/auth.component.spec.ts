/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { LocalService } from '../../../core/storage/local.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY } from 'rxjs';

class AuthServiceStub {
  public login(): void { }
}

describe('AuthComponent', () => {
  const localService: LocalService = new LocalService();
  const service: AuthService = new AuthService(localService);
  const component: AuthComponent = new AuthComponent(service, null);
  let router: Router;
  let fixture: ComponentFixture<AuthComponent>;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       CommonModule,
  //       SharedModule,
  //       RouterTestingModule.withRoutes([]),
  //     ],
  //     declarations: [ AuthComponent ],
  //     providers: [{
  //       provide: AuthService,
  //       useClass: AuthServiceStub,
  //     }],
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(AuthComponent);
  //   router = TestBed.get(Router);
  //   // component = new AuthComponent(new AuthService(new LocalService()), router);
  //   // fixture.detectChanges();
  // });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should create form with 2 controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should be valid', () => {
    const spy = spyOn(service, 'login').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  xit('should be created', inject([AuthService], (service: AuthService) => {
    expect(component).toBeTruthy();
  }));
});
