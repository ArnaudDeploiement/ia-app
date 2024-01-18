import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,FeaturesComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
