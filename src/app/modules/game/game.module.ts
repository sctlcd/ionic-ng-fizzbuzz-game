import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameFormComponent } from './components/game-form/game-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameFormComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [GameFormComponent],
})
export class GameModule {}
