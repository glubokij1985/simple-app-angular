import { TestBed, inject } from '@angular/core/testing';
import { LocalService } from './local.service';

let store = {};
const localStorageStub = {
    setStorage: (key: string, value: string) => {
        store[key] = value;
    },
    getStorage: (key: string) => {
        return store[key];
    },
    removeStorage: (key: string) => {
        delete store[key];
    }
};

describe('LocalService', () => {
    let service: LocalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalService],
        });

        service = TestBed.get(LocalService);
    });

    beforeEach(() => {
        store = {};
    });

    it('should create local service', () => {
        expect(service).toBeTruthy();
    });

    it('should set local storage item', () => {
        spyOn(localStorage, 'setItem').and.callFake(localStorageStub.setStorage);
        service.setStorage('item', 'some_value');
        expect(localStorage.getItem('item')).toEqual('some_value');
    });

    it('should return local storage item', () => {
        spyOn(localStorage, 'getItem').and.callFake(localStorageStub.getStorage);
        localStorage.setItem('item', 'some_value');
        expect(service.getStorage).toEqual('some_value');
    });

    it('should remove item from local storage', () => {
        spyOn(localStorage, 'removeItem').and.callFake(localStorageStub.removeStorage);
        localStorage.setItem('item', 'some_value');
        service.removeStorage('item');
        expect(localStorage.getItem('item')).toBeFalsy();
    });
});
