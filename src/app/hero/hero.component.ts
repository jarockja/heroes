import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}