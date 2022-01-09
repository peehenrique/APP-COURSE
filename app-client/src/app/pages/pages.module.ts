import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthPageModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageModule
  ]
})
export class PagesModule { }
