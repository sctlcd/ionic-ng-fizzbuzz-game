import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '@pages/home/home-routing.module';

import { HomePage } from '@pages/home/home.page';
import { GameModule } from '@modules/game/game.module';

// Home Page Module
@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GameModule,
  ],
  exports: [HomePage],
})
export class HomePageModule {}
