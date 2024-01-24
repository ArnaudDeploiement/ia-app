import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input() intro?: string;
  @Input() titlecontent?: string;
  @Input() Data?: any = [];



}
