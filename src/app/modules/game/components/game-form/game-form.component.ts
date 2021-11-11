import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Game } from '@shared/models/game.interface';

// Game Form Component
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  match = new Game(2);

  constructor() {}

  ngOnInit(): void {}
}
