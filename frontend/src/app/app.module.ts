import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './shared/app-layout/app-layout.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './pages/auth/auth.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MemberModule } from './pages/member/member.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    AuthModule,
    AppRoutingModule,
    MemberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
