import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../core/storage/local.service';
import { CartService } from '../../cart/services/cart.service';
import { IUser } from '../../models/user.interface';
import { USER_KEY } from '../../core/storage/local-storage-keys.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public productsInCart: any[];

  public isLoggedIn = true;
  public user: IUser = this.localService.getStorage(USER_KEY);

  constructor(
    private localService: LocalService,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public getLocalStorage(): IUser {
    return this.user = this.localService.getStorage(USER_KEY);
  }

  public logOut(): void {
    this.localService.removeStorage(USER_KEY);
    this.cartService.clear();
    this.isLoggedIn = false;
    this.navigateToLogin();
  }

  public navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
