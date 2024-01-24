import { Component, Input } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ContentComponent } from '../../components/content/content.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { HeroService } from '../../services/HeroService';
import { ModuleService } from '../../services/ModuleService';
import { ContentService } from '../../services/ContentService';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, ContentComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Title?: string;
  Tagline?: string;
  Promesse?: string;
  Intro?: string;
  TitleContent?: string;
  moduleData: any = [];

  constructor(private heroService: HeroService, private moduleService: ModuleService, private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const data = this.heroService.getHeroData();
    const data2 = this.contentService.getContentData();
    this.Title = data.title;
    this.Tagline = data.tagline;
    this.Promesse = data.promesse;

    this.Intro = data2.Intro;
    this.TitleContent = data2.TitleContent;

    this.moduleService.getModuleData().subscribe((Data) => {
      this.moduleData = Data;
    });

  }



}
