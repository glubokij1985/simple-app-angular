import { AuthService } from './auth.service';
import { AuthComponent } from '../../auth/containers/login/auth.component';

xdescribe('isLoggedIn', () => {
    let component: AuthComponent;
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService(null);
        component = new AuthComponent(service, null);
    });

    it('should return true if user is logged in', () => {
        const result = component.loginForm.valid;
        expect(result).toBeTruthy();
    });
});
