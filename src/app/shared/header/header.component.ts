import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

interface IUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [LocalService],
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public productsInCartAmoutn: number;

  public isLoggedIn = true;
  public user: IUser = this.localService.getStorage('user');

  constructor(
    private localService: LocalService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public getLocalStorage(): IUser {
    return this.user = this.localService.getStorage('user');
  }

  public clearLocalStorage(): void {
    this.localService.removeStorage();
    this.isLoggedIn = false;
    this.navigateToLogin();
  }

  public navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
