import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//modules
import { MaterialUIModule } from './material-ui/material-ui.module';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { ClientsComponent } from './clients/clients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { AddclientComponent } from './addclient/addclient.component';
import { GethousesComponent } from './gethouses/gethouses.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCLientComponent } from './view-client/view-client.component';
    //services
    import { AddhouseService } from './addhouse.service';
// Import the functions you need from the SDKs you need
import { FirebaseApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { environment} from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreeoccupiedComponent } from './freeoccupied/freeoccupied.component';
import { OccupiedComponent } from './occupied/occupied.component';
import { FreevacantComponent } from './freevacant/freevacant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HousesComponent,
    ClientsComponent,
    NavigationComponent,
    AddhouseComponent,
    AddclientComponent,
    GethousesComponent,
    FooterComponent,
    ViewCLientComponent,
    FreeoccupiedComponent,
    OccupiedComponent,
    FreevacantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AddhouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
