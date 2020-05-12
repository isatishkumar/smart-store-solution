import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MainMenuComponent } from './main-menu.component';


const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    children: [{
      path: '',
      component: CardMenuComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
