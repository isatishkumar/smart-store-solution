import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuCotainerComponent } from './side-menu-cotainer/side-menu-cotainer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SideMenuCotainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule
  ],
  exports: [SideMenuCotainerComponent]
})
export class ContainerWithSideMenuModule { }
