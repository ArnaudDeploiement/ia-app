import { Component, Input } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContentComponent } from '../../components/content/content.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { HeroService } from '../../services/HeroService';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, ContentComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() Title?: string;
  @Input() Tagline?: string;
  @Input() Promesse?: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const data = this.heroService.getHeroData();
    this.Title = data.title;
    this.Tagline = data.tagline;
    this.Promesse = data.promesse;
  }

}
