import { NgModule } from '@angular/core';
import { AppSiteNavigationComponent } from './side-navigation/site-navigation.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { AppHeaderComponent } from './header/header.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    AppSiteNavigationComponent,
    AppHeaderComponent,
    AppToolbarComponent
  ],
  exports: [
    AppSiteNavigationComponent,
    AppToolbarComponent,
    AppHeaderComponent
  ]
})
export class AppLayoutModule { }
