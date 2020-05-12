import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { MainMenuModule } from './main-menu/main-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { ContainerWithSideMenuModule } from './container-with-side-menu/container-with-side-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
