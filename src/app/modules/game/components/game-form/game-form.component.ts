import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Game } from '@app/shared/models/game';

// Game Form Component
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {
  game = new Game(12);

  constructor() {}

  ngOnInit(): void {}
}
