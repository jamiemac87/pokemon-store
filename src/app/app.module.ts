import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { PokemonService } from './services/pokemon.service';
import { PokemonDetailViewComponent } from './containers/pokemon-detail-view/pokemon-detail-view.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonDetailViewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
