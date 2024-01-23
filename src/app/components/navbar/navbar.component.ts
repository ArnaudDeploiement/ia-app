import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/MenuService'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //Logo
  @Input() logo?: string;

  //Menu
  @Input() Menu1?: string;
  @Input() Menu2?: string;
  @Input() Menu3?: string;
  @Input() Menu4?: string;

  //Button
  @Input() button?: string;


  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const data = this.menuService.getMenuData();
    this.logo = data.logo;
    this.Menu1 = data.Menu1;
    this.Menu2 = data.Menu2;
    this.button = data.button;
  }

}
