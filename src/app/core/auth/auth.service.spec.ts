import { AuthService } from './auth.service';
import { AuthComponent } from '../../auth/containers/login/auth.component';
import { TestBed } from '@angular/core/testing';
import { LocalService } from '../storage/local.service';

class LocalServiceStub {
    public isLoggedIn(): void { }
}

describe('isLoggedIn', () => {
    // let component: AuthComponent;
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: LocalService,
                    useClass: LocalServiceStub,
                }
            ]
        });
        service = new AuthService(null);
        // component = new AuthComponent(service, null);
    });

    it('should return true if user is logged in', () => {
        // const result = component.loginForm.valid;
        expect(service.isLoggedIn()).toBeTruthy();
    });
});
