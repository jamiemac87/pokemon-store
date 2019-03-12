import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailViewComponent } from './pokemon-detail-view.component';

describe('PokemonDetailViewComponent', () => {
  let component: PokemonDetailViewComponent;
  let fixture: ComponentFixture<PokemonDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
