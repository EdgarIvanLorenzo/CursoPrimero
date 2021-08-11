import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoHeroesComponent } from './Heroes/listado-heroes/listado-heroes.component';
import {HeroesComponent } from './Heroes/heroes.module';
import { SaludosComponent } from './SaludoG/saludo.module';
@NgModule({
  declarations: [
    AppComponent,
    ListadoHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesComponent,
    SaludosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
