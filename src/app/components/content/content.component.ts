import { Component, Input } from '@angular/core';
import { ContentService } from '../../services/ContentService'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input() intro?: string;


  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const data = this.contentService.getContentData();
    this.intro = data.intro;
  }


}
