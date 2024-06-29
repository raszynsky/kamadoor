import { Component, Input } from '@angular/core';

@Component({
  selector: 'kamadoor-menu-offer-button',
  templateUrl: './menu-offer-button.component.html',
  styleUrls: ['./menu-offer-button.component.scss'],
  standalone: true,
})
export class MenuOfferButtonComponent {
  @Input() src!: string;
  @Input() url!: string;

  @Input() label?: string;
  @Input() description?: string;
}
