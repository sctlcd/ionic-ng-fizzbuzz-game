import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
import { GameFormComponent } from '@modules/game/components/game-form/game-form.component';
import { FormsModule } from '@angular/forms';

// Game Module
=======
import { GameFormComponent } from './components/game-form/game-form.component';
import { FormsModule } from '@angular/forms';

>>>>>>> a16bd9471a764654d57e79116b194d277596b6ef
@NgModule({
  declarations: [GameFormComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [GameFormComponent],
})
export class GameModule {}
