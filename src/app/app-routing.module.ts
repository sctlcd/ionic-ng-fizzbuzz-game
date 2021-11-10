import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'home',
    loadChildren: () =>
      import('./modules/home/pages/home/home.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
=======
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./game/game.module').then((m) => m.GamePageModule),
>>>>>>> a16bd9471a764654d57e79116b194d277596b6ef
  },
];

// App Routing Module
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
