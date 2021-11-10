import { GameModule } from './../modules/game/game.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';

@NgModule({
  declarations: [GamePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    GameModule,
  ],
  exports: [GamePage],
})
export class GamePageModule {}
