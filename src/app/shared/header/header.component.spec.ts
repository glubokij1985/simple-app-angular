import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared.module';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../core/auth/auth.service';
import { LocalService } from '../../core/storage/local.service';
import { CartService } from '../../cart/services/cart.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            SharedModule,
            BrowserAnimationsModule,
            RouterTestingModule.withRoutes([]),
        ],
        providers: [
          AuthService,
          LocalService,
          CartService,
        ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user', () => {
      const spy = spyOn(router, 'navigate');
      component.logout();
      expect(spy).toHaveBeenCalledWith(['login']);
  });
});
