import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './works.html',
  styleUrl: './works.scss',
})
export class Works {
  constructor(private router: Router) {}

  goToWork(id: string) {
    this.router.navigate(['/work', id]);
  }

  work = {
    id: '1',
    name: 'Nombre de la obra',
    startDate: '15/06/2025'
  };
}
