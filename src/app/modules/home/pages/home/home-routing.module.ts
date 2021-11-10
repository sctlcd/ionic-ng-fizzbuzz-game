import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD:src/app/modules/home/pages/home/home-routing.module.ts
    component: HomePage,
=======
    component: GamePage,
>>>>>>> a16bd9471a764654d57e79116b194d277596b6ef:src/app/game/game-routing.module.ts
  },
];

// Home Page Routing Module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
