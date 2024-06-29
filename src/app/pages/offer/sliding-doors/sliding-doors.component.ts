import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

import { OfferButtonComponent } from '@components/offer-button/offer-button.component';

@Component({
  selector: 'kamadoor-sliding-doors',
  templateUrl: './sliding-doors.component.html',
  styleUrls: ['./sliding-doors.component.scss'],
  imports: [DataViewModule, OfferButtonComponent],
  standalone: true,
})
export class SlidingDoorsComponent {
  offerItems = [
    {
      name: 'DRZWI PRZESUWNE\nSZKLANE',
      image: 'glass.jpg',
      url: 'oferta/drzwi-przesuwne/szklane',
    },
    {
      name: 'DRZWI PRZESUWNE\nDREWNIANE',
      image: 'wooden.jpg',
      url: 'oferta/drzwi-przesuwne/drewniane',
    },
    {
      name: 'DRZWI ŁAMANE\nDRZWI SKŁADANE',
      image: 'folding.jpg',
      url: 'oferta/drzwi-przesuwne/lamane-skladane',
    },
  ];
}
