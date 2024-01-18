import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
//Logo
  @Input() logo?:string;

//Menu
  @Input() Menu1?:string;
  @Input() Menu2?:string;
  @Input() Menu3?:string;
  @Input() Menu4?:string;

//Button
@Input() button?:string;

}
