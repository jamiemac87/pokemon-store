import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.css'],
})
export class PokemonDetailViewComponent implements OnInit {
  pokemonName: string;
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemon(this.pokemonName).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
