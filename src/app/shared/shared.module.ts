import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { InfoDirective } from './directives/info.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    InfoDirective,
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    InfoDirective,
  ],
})
export class SharedModule { }
