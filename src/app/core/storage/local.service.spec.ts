import { TestBed, inject } from '@angular/core/testing';
import { LocalService } from './local.service';

describe('LocalService', () => {
    let service: LocalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalService],
        });

        service = TestBed.get(LocalService);
    });

    beforeEach(() => {
        const store = {};
        const localStorageStub = {
            setStorage: (key: string, value: string) => {
                store[key] = value;
            },
            getStorage: (key: string): string => {
                return key in store ? store[key] : null;
            },
            removeStorage: (key: string) => {
                delete store[key];
            }
        };

        spyOn(localStorage, 'setItem').and.callFake(localStorageStub.setStorage);
        spyOn(localStorage, 'getItem').and.callFake(localStorageStub.getStorage);
        spyOn(localStorage, 'removeItem').and.callFake(localStorageStub.removeStorage);
    });

    it('should create local service', () => {
        expect(service).toBeTruthy();
    });

    it('should set local storage item', () => {
        service.setStorage('item', 'some_value');
        expect(localStorage.getItem('item')).toMatch('some_value');
    });

    it('should return local storage item', () => {
        localStorage.setItem('item', 'some_value');
        // debugger;
        // let ggg = console.log(true);
        expect(service.getStorage('item')).toEqual('some_value');
    });

    it('should remove item from local storage', () => {
        localStorage.setItem('item', 'some_value');
        service.removeStorage('item');
        expect(localStorage.getItem('item')).toBeFalsy();
    });
});
