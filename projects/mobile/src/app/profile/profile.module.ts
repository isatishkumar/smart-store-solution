import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerWithSideMenuModule } from '../container-with-side-menu/container-with-side-menu.module';
import { BrandComponent } from './brand/brand.component';


@NgModule({
  declarations: [ProfileComponent, BrandComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    ContainerWithSideMenuModule
  ]
})
export class ProfileModule { }
