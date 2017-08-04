import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import {ErrorModule} from "./error/error.module";
import {UserModule} from "./user/user.module";
import {HttpClientModule} from "@angular/common/http"
import {RestApiService} from "./service/rest-api.service";
import {GeneModule} from "./gene/gene.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ErrorModule,
    UserModule,
    HttpClientModule,
    GeneModule,
  ],
  providers: [RestApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
