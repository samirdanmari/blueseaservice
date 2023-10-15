import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { HousesComponent } from './houses/houses.component';
import { LoginComponent } from './login/login.component';
import { reduce } from 'rxjs';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { GethousesComponent } from './gethouses/gethouses.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'client', component: ClientsComponent},
  {path: 'houses', component: HousesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addhouse', component: AddhouseComponent},
  {path: 'gethouses', component: GethousesComponent},
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  //
  {path: '**', redirectTo: 'home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
