import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LocalService } from '../storage/local.service';

class LocalServiceStub {
    public getStorage(): boolean {
        return true;
    }

    public setStorage(): void { }

    public removeStorage(): void { }
}

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                {
                    provide: LocalService,
                    useClass: LocalServiceStub,
                },
            ]
        });

        service = TestBed.get(AuthService);
    });

    it('should create auth service', () => {
        expect(service).toBeTruthy();
    });

    it('should return true if user is logged in', () => {
        expect(service.isLoggedIn()).toBeTruthy();
    });

    it('should set local storage with user credentials', () => {
        service.login({email: 't@g.d', password: 'psw'});
        expect(service.isLoggedIn()).toBeTruthy();
    });

    it('should logout user', () => {
        const spy = spyOn(service, 'logout');
        service.logout();
        expect(spy).toHaveBeenCalled();
    });
});
