import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input() Title?: string;
  @Input() Tagline?: string;
  @Input() Promesse?: string;

}
