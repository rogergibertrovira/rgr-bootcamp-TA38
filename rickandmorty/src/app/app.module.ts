import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersGroupComponent } from './characters-group/characters-group.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CharacterCardComponent,
    CharactersComponent,
    CharactersGroupComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
