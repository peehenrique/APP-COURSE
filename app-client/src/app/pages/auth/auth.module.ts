import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

@NgModule({
  imports: [
    AuthPageRoutingModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
