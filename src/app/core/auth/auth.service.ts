import { Injectable } from '@angular/core';
import { LocalService } from '../storage/local.service';
import { IUser } from './../../models/user.interface';
import { USER_KEY } from '../storage/local-storage-keys.const';

@Injectable()
export class AuthService {
  constructor(private localService: LocalService) { }

  public isLoggedIn(): boolean {
    return this.localService.getStorage(USER_KEY) || false;
  }

  public login(user: IUser) {
    this.localService.setStorage(USER_KEY, user);
  }

  public logout(): void {
    this.localService.removeStorage(USER_KEY);
  }
}
