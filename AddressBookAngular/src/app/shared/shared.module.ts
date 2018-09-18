import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: []
})
export class SharedModule { }
