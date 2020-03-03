import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { InfoDirective } from './directives/info.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    InfoDirective,
    FilterPipe,
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    InfoDirective,
    FilterPipe,
  ],
})
export class SharedModule { }
