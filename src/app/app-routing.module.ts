import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AutharisationComponent} from "./components/autharisation/autharisation.component";

const routes: Routes = [
  {
    path: 'auth', component: AutharisationComponent
  },
  {
    path: '', component: MainComponent
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
