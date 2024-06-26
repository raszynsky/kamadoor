import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kamadoor-handles-boards',
  templateUrl: './handles-boards.component.html',
  styleUrls: ['./handles-boards.component.scss'],
  imports: [DataViewModule],
  standalone: true,
})
export class HandlesBoardsComponent {
  offerItems = [
    {
      name: 'LISTWY PRZYPODŁOGOWE',
      image: 'board.jpg',
      url: 'oferta/klamki-do-drzwi-listwy-przypodlogowe/listwy',
    },
    {
      name: 'KLAMKI',
      image: 'handle.jpg',
      url: 'oferta/klamki-do-drzwi-listwy-przypodlogowe/klamki',
    },
  ];
}
