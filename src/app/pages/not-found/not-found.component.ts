import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kamadoor-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
})
export class PageNotFoundComponent {
  private readonly router = inject(Router);

  backToOrders(): void {
    this.router.navigate(['']);
  }
}
