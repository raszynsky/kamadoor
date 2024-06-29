import { Component } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';

import { MenuOfferButtonComponent } from '@components/menu-offer-button/menu-offer-button.component';

@Component({
  selector: 'kamadoor-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [CarouselModule, DataViewModule, MenuOfferButtonComponent],
  standalone: true,
})
export class MainPageComponent {
  carouselImages = [
    {
      image: 'apartmentInternal1.jpg',
      name: 'Drzwi wewnętrzne do mieszkania',
    },
    {
      image: 'internal1.webp',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'loft1.jpg',
      name: 'Drzwi loftowe',
    },
    {
      image: 'externalSteel.jpg',
      name: 'Drzwi zewnętrzne stalowe',
    },
    {
      image: 'internal2.webp',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'loft2.jpg',
      name: 'Drzwi loftowe',
    },
    {
      image: 'apartmentInternal2.jpg',
      name: 'Drzwi wewnętrzne do mieszkania',
    },
    {
      image: 'internal3.webp',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'loft3.jpg',
      name: 'Drzwi loftowe',
    },
    {
      image: 'externalWooden.jpg',
      name: 'Drzwi zewnętrzne drewniane',
    },
    {
      image: 'internal4.webp',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'internal5.jpg',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'hidden1.jpg',
      name: 'Drzwi ukryte',
    },
    {
      image: 'internal6.webp',
      name: 'Drzwi wewnętrzne',
    },
    {
      image: 'loft4.jpg',
      name: 'Drzwi loftowe',
    },
    {
      image: 'internal7.jpg',
      name: 'Drzwi wewnętrzne',
    },
  ];

  offerItems = [
    {
      name: 'DRZWI\nZEWNĘTRZNE',
      description: 'stylowe i nowoczesne',
      image: 'external.JPG',
      url: 'oferta/drzwi-zewnetrzne',
    },
    {
      name: 'DRZWI WEJŚCIOWE\nDO MIESZKANIA',
      description: 'stylowe i nowoczesne',
      image: 'apartmentInternal.jpg',
      url: 'oferta/drzwi-wejsciowe-do-mieszkania',
    },
    {
      name: 'DRZWI\nWEWNĘTRZNE',
      description: 'fornirowane, malowane i\nlaminowane',
      image: 'internal.JPG',
      url: 'oferta/drzwi-wewnetrzne',
    },
    {
      name: 'DRZWI\nUKRYTE',
      description: 'drzwi ukryte, drzwi niewidoczne',
      image: 'hidden.jpg',
      url: 'oferta/drzwi-ukryte',
    },
    {
      name: 'DRZWI\nPRZESUWNE',
      description: 'drewniane i szklane',
      image: 'sliding.jpg',
      url: 'oferta/drzwi-przesuwne',
    },
    {
      name: 'DRZWI LOFTOWE\nDRZWI SZKLANE',
      description: 'stylowe i nowoczesne',
      image: 'loft.jpg',
      url: 'oferta/drzwi-loftowe-drzwi-szklane',
    },
    {
      name: 'ŚCIANKI PRYSZNICOWE\nKABINY PRYSZNICOWE',
      description: 'ścianki prysznicowe',
      image: 'showers.jpg',
      url: 'oferta/scianki-prysznicowe-kabiny-prysznicowe',
    },
    {
      name: 'KLAMKI DO DRZWI\nLISTWY PRZYPODŁOGOWE',
      description: 'listwy przypodłogowe, klamki,\nzamki',
      image: 'handlesBoards.JPG',
      url: 'oferta/klamki-do-drzwi-listwy-przypodlogowe',
    },
  ];
}
