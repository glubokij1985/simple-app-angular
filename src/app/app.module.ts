import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './store/store.module';
import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';

const routes: Routes =[
  { path: 'login', component: AuthComponent, },
  { path: 'store', component: StoreComponent, },
  { path: '', redirectTo: 'login', pathMatch: 'full', },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
