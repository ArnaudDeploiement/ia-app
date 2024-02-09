import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input() intro?: string;
  @Input() titlecontent?: string;
  @Input() Data?: any = [];



}
