import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'kamadoor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MenubarModule, NgClass],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  activeItem = '';
  isOfferItemSelected = false;

  items: MenuItem[] = [
    {
      icon: 'fa fa-home',
      label: '|',
      url: '/',
      id: 'home',
    },
    {
      icon: 'fa fa-clipboard',
      label: 'OFERTA',
      id: 'offer',
      items: [
        {
          label: 'Drzwi zewnętrzne',
          url: 'oferta/drzwi-zewnetrzne',
          id: 'externalDoors',
        },
        {
          label: 'Drzwi wejściowe do mieszkania',
          url: 'oferta/drzwi-wejsciowe-do-mieszkania',
          id: 'apartmentInternalDoors',
        },
        {
          label: 'Drzwi wewnętrzne',
          url: 'oferta/drzwi-wewnetrzne',
          id: 'internalDoors',
        },
        {
          label: 'Drzwi ukryte',
          url: 'oferta/drzwi-ukryte',
          id: 'hiddenDoors',
        },
        {
          label: 'Drzwi przesuwne',
          url: 'oferta/drzwi-przesuwne',
          id: 'slidingDoors',
        },
        {
          label: 'Drzwi Loftowe - Drzwi szklane',
          url: 'oferta/drzwi-loftowe-drzwi-szklane',
          id: 'loftDoors',
        },
        {
          label: 'Ścianki prysznicowe - Kabiny prysznicowe',
          url: 'oferta/scianki-prysznicowe-kabiny-prysznicowe',
          id: 'showers',
        },
        {
          label: 'Klamki do drzwi, listwy przypodłogowe',
          url: 'oferta/klamki-do-drzwi-listwy-przypodlogowe',
          id: 'accessories',
        },
      ],
    },
    {
      icon: 'fa fa-file-image-o',
      label: 'REALIZACJE',
      url: 'realizacje',
      id: 'realizations',
    },
    {
      icon: 'fa fa-file-text',
      label: 'WARTO WIEDZIEĆ',
      url: 'poradnik',
      id: 'guide',
    },
    {
      icon: 'fa fa-info-circle',
      label: 'O NAS',
      url: 'o-nas',
      id: 'aboutUs',
    },
    {
      icon: 'fa fa-map-marker',
      label: 'KONTAKT',
      url: 'kontakt',
      id: 'contact',
    },
  ];

  ngOnInit(): void {
    this.findActiveItem(window.location.href, this.items, false);
  }

  private findActiveItem(
    url: string,
    items: MenuItem[],
    isChild: boolean
  ): void {
    for (const item of items) {
      if (item.items) {
        this.findActiveItem(url, item.items, true);
      }

      if (url.includes(item.url!)) {
        this.activeItem = item.id!;
        this.isOfferItemSelected = isChild;
      }
    }
  }
}
