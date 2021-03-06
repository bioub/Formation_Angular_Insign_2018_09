import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent,
    TopBarComponent,
  ],
  exports: [
    TopBarComponent,
  ],
})
export class CoreModule { }
