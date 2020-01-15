import { Injectable } from '@angular/core';
import { LocalService } from '../storage/local.service';
import { USER_KEY } from '../storage/local-storage-keys.const';

@Injectable()
export class AuthService {

  constructor(private localService: LocalService) { }

  public isLoggedIn(): boolean {
    return this.localService.getStorage(USER_KEY) || false;
  }

}
