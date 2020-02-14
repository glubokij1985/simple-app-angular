import { TestBed, inject } from '@angular/core/testing';
import { LocalService } from './local.service';

const userStub = {
    email: 'test@mail.com',
    password: 'psw',
};

describe('LocalService', () => {
    let service: LocalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalService],
        });

        service = TestBed.get(LocalService);
    });

    afterEach(() => {
        localStorage.removeItem('item');
    });

    it('should create local service', () => {
        expect(service).toBeTruthy();
    });

    it('should set local storage item', () => {
        service.setStorage('item', userStub);
        expect(localStorage.getItem('item')).toEqual(JSON.stringify(userStub));
    });

    it('should return local storage item', () => {
        localStorage.setItem('item', JSON.stringify(userStub));
        expect(service.getStorage('item')).toEqual(userStub);
    });

    it('should remove item from local storage', () => {
        localStorage.setItem('item', 'some_value');
        service.removeStorage('item');
        expect(localStorage.getItem('item')).toBeFalsy();
    });
});
