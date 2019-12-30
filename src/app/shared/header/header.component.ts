import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = true;
  public user: IUser = this.getLocalStorage();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public getLocalStorage(): IUser {
    return this.user = JSON.parse(localStorage.getItem('user'));
  }

  public clearLocalStorage(): void {
    localStorage.removeItem('user');
    this.navigateToLogin();
  }

  public navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
