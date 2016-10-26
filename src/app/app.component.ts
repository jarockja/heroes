import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
  selector: 'heroes-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {

  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  heroes = this.heroService.getHeroes();

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
