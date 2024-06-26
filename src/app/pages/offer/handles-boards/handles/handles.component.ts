import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-handles-boards-handles',
  templateUrl: './handles.component.html',
  styleUrls: ['./handles.component.scss'],
  imports: [DataViewModule, ImageModule],
  standalone: true,
})
export class HandlesBoardsHandlesComponent {
  handles = [
    'KL-01 A',
    'KL-02 A',
    'KL-03 T',
    'KL-04 T',
    'KL-05 C',
    'KL-06 A',
    'KL-07 T',
    'KL-08 I',
    'KL-09 A',
    'KL-10 A',
    'KL-11 T',
    'KL-12 C',
    'KL-13 S',
    'KL-14 A',
    'KL-15 T',
    'KL-16 A',
    'KL-17 A',
    'KL-18 C',
    'KL-19 A',
    'KL-20 T',
  ];

  logos = [
    {
      image: 'assets/offer/handles-boards/handles/logos/APRILE.jpg',
      url: 'https://enger.pl/wp-content/uploads/2024/03/enger_katalog_ENG_2024_net.pdf',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/CORONA.JPG',
      url: 'https://metal-bud.eu/corona/CORONA-premium-door-handles-2022-catalog-Metal-Bud.pdf',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/DOMINO.JPG',
      url: 'http://www.domino.pl/klamki/dopobrania/lista',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/GAMET.JPG',
      url: 'https://gamet.eu/katalog-online/?id=35426',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/INFINITY LINE.JPG',
      url: 'https://infinityline.eu/joomla_3/index.php/do-pobrania',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/KUCHINOX.JPG',
      url: 'https://kuchinox.pl/pliki-do-pobrania/katalogi-i-ulotki/metalowe',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/NOVAMET.JPG',
      url: 'https://novamet.eu/dla-klientow.html',
    },
    {
      image: 'assets/offer/handles-boards/handles/logos/TUPAI.JPG',
      url: 'https://tupaipolska.pl/do-pobrania',
    },
  ];
}
