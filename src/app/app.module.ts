import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AutharisationComponent } from './components/autharisation/autharisation.component';
import { HeaderComponent } from './components/header/header.component';
import {AppUiModule} from "./app-ui.module";
import {BodyHomeComponent} from "./components/body-home/body-home.component";
import { FooterComponent } from './components/footer/footer.component';
import { BicyclesComponent } from './components/bicycles/bicycles.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AutharisationComponent,
    HeaderComponent,
    BodyHomeComponent,
    FooterComponent,
    BicyclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
