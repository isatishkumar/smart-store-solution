import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { MainMenuComponent } from './main-menu.component';
import { MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [MainMenuComponent, CardMenuComponent],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    MatRippleModule
  ]
})
export class MainMenuModule { }
