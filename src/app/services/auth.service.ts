import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { USER_KEY } from '../constants/local-storage-keys.const';

@Injectable()
export class AuthService {
  public isLoggedIn = false;

  constructor(private localService: LocalService) {
    this.isLoggedIn = this.localService.getStorage(USER_KEY) || false;
  }

}
