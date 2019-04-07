import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [AppComponent, PokemonListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
