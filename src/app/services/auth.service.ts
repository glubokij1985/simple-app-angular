import { Injectable } from '@angular/core';
import { LocalService } from './local.service';
import { USER_KEY } from '../constants/local-storage-keys.const';

@Injectable()
export class AuthService {

  constructor(private localService: LocalService) { }

  public isLoggedIn(): boolean {
    return this.localService.getStorage(USER_KEY) || false;
  }

}
