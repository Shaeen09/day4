import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePetsComponent } from './home-pets/home-pets.component';
import { FooterComponent } from './footer/footer.component';
import { PetServicesComponent } from './pet-services/pet-services.component';
import { PetMoreComponent } from './pet-more/pet-more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePetsComponent,
    FooterComponent,
    PetServicesComponent,
    PetMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
