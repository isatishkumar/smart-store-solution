import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./main-menu/main-menu.module').then(module => module.MainMenuModule),
    resolve: []
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(module => module.InventoryModule),
    resolve: []
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(module => module.ProfileModule),
    resolve: []
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
