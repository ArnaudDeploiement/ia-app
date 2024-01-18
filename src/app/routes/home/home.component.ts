import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContentComponent } from '../../components/content/content.component';
import { PricingComponent } from '../../components/pricing/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,FeaturesComponent, ContentComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
