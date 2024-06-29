import { Component, Input } from '@angular/core';

@Component({
  selector: 'kamadoor-offer-button',
  templateUrl: './offer-button.component.html',
  styleUrls: ['./offer-button.component.scss'],
  standalone: true,
})
export class OfferButtonComponent {
  @Input() src!: string;
  @Input() url!: string;

  @Input() label?: string;

  @Input() bgColor = 'white';
}
