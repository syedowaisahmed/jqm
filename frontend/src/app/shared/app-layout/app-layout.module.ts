import { NgModule } from '@angular/core';
import { AppSiteNavigationComponent } from './side-navigation/site-navigation.component';
import { AppToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppSiteNavigationComponent,
    AppToolbarComponent
  ],
  exports: [
    AppSiteNavigationComponent,
    AppToolbarComponent
  ]
})
export class AppLayoutModule { }
