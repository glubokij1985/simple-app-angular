import { Injectable } from '@angular/core';

interface IUser {
    email: string;
    password: string;
}

@Injectable()
export class LocalService {

    constructor() { }

    public setStorage(key: string, obj: IUser) {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    public getStorage(key: string): IUser {
        return JSON.parse(localStorage.getItem(key));
    }

    public removeStorage() {
        localStorage.removeItem('user');
    }

}
