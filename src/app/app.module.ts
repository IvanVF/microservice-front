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
import { ScootersComponent } from './components/scooters/scooters.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { SparesComponent } from './components/spares/spares.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import {AngularGradientProgressbarModule} from "angular-gradient-progressbar";
import { AboutComponent } from './components/about/about.component';
import { ForCustomersComponent } from './components/for-customers/for-customers.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AutharisationComponent,
    HeaderComponent,
    BodyHomeComponent,
    FooterComponent,
    BicyclesComponent,
    ScootersComponent,
    AccessoriesComponent,
    EquipmentsComponent,
    SparesComponent,
    ProductPageComponent,
    AboutComponent,
    ForCustomersComponent,
    DeliveryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule,
    HttpClientModule,
    AngularGradientProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
