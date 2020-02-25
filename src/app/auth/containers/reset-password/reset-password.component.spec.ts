import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../core/auth/auth.service';
import { SharedModule } from './../../../shared/shared.module';
import { ResetPasswordComponent } from './reset-password.component';

class AuthServiceStub {
    public login(): void { }
}

describe('ResetPasswordComponent', () => {
    let authService: AuthService;
    let component: ResetPasswordComponent;
    let fixture: ComponentFixture<ResetPasswordComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [
            CommonModule,
            SharedModule,
            BrowserAnimationsModule,
            RouterTestingModule.withRoutes([]),
        ],
        declarations: [ ResetPasswordComponent ],
        providers: [
            {
                provide: AuthService,
                useClass: AuthServiceStub,
            }
        ],
    })
    .compileComponents();

        fixture = TestBed.createComponent(ResetPasswordComponent);
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

        it('should create form with 2 controls', () => {
            expect(component.resetPasswordForm.contains('newPassword')).toBeTruthy();
            expect(component.resetPasswordForm.contains('repeatPassword')).toBeTruthy();
        });

        it('should be valid', () => {
            const spy = spyOn(authService, 'login');
            spyOnProperty(component.resetPasswordForm, 'valid', 'get').and.returnValue(true);
            component.submit();
            expect(spy).toHaveBeenCalled();
        });
    });
});
