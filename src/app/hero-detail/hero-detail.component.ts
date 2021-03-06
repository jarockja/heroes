import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) {}

  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => {
        console.log(`got hero id: ${id}`);
        this.hero = hero
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
