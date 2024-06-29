import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

import { OfferButtonComponent } from '@components/offer-button/offer-button.component';

@Component({
  selector: 'kamadoor-internal-doors',
  templateUrl: './internal-doors.component.html',
  styleUrls: ['./internal-doors.component.scss'],
  imports: [DataViewModule, OfferButtonComponent],
  standalone: true,
})
export class InternalDoorsComponent {
  offerItems = [
    {
      name: 'DRZWI\nDRE',
      image: 'dre.jpg',
      url: 'oferta/drzwi-wewnetrzne/dre',
    },
    {
      name: 'DRZWI NA WYMIAR\nDALLAS',
      image: 'dallas.jpg',
      url: 'oferta/drzwi-wewnetrzne/dallas',
    },
    {
      name: 'DRZWI BARAŃSKI',
      image: 'baranski.jpg',
      url: 'oferta/drzwi-wewnetrzne/baranski',
    },
    {
      name: 'DRZWI JAGDOR / JAGRAS',
      image: 'jagdor-jagras.jpg',
      url: 'oferta/drzwi-wewnetrzne/jagdor-jagras',
    },
    {
      name: 'DRZWI VOSTER',
      image: 'voster.jpg',
      url: 'oferta/drzwi-wewnetrzne/voster',
    },
    {
      name: 'DRZWI FRANCUSKIE',
      image: 'french.jpg',
      url: 'oferta/drzwi-wewnetrzne/francuskie',
    },
    {
      name: 'DRZWI NA STARĄ\nMETALOWĄ OŚCIEŻNICĘ',
      image: 'old-frame.jpg',
      url: 'oferta/drzwi-wewnetrzne/stara-metalowa-oscieznica',
    },
  ];
}
