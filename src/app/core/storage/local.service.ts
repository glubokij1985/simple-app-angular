import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

    constructor() { }

    public setStorage<T>(key: string, obj: T) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    public getStorage<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }

    public removeStorage(key: string) {
        localStorage.removeItem(key);
    }

}
