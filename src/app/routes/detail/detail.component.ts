import { Component, inject, Input } from '@angular/core';
import { ModuleService } from '../../services/ModuleService';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../../safe.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  ModuleData: any; // Déclarez le type sans initialisation

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const itemId = Number(this.route.snapshot.params['id']);
    this.moduleService.getModuleDatabById(itemId).subscribe((Data) => {
      this.ModuleData = Data;
    });

  }
}