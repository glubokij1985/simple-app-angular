import { Injectable } from '@angular/core';

// interface IUser {
//     email: string;
//     password: string;
// }

@Injectable()
export class LocalService {

    constructor() { }

    public setStorage(key: string, obj: any) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    public getStorage(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    public removeStorage(key: string) {
        localStorage.removeItem(key);
    }

}
