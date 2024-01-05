import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PipesModule } from './pipes/pipes.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsTypeModule } from './forms/forms.module';
import { HttpCmpModule } from './http-cmp/http-cmp.module';
import { CoursesModule } from './courses/courses.module';

// Internacionalization i18n
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    PipesModule,
    HttpClientModule,
    FormsTypeModule,
    HttpCmpModule,
    CoursesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
