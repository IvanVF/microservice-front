import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AutharisationComponent} from "./components/autharisation/autharisation.component";
import {BodyHomeComponent} from "./components/body-home/body-home.component";
import {BicyclesComponent} from "./components/bicycles/bicycles.component";
import {ScootersComponent} from "./components/scooters/scooters.component";
import {AccessoriesComponent} from "./components/accessories/accessories.component";

const routes: Routes = [
  {
    path: 'auth', component: AutharisationComponent
  },
  {
    path: '', component: BodyHomeComponent
  },
  {
    path: 'bicycles', component: BicyclesComponent
  },
  {
    path: 'bicycles/:type', component: BicyclesComponent
  },
  {
    path: 'scooters/:type', component: ScootersComponent
  },
  {
    path: 'accessories/:type', component: AccessoriesComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
