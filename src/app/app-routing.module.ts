import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonDetailViewComponent } from './containers/pokemon-detail-view/pokemon-detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
