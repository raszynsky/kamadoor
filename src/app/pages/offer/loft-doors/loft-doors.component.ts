import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kamadoor-loft-doors',
  templateUrl: './loft-doors.component.html',
  styleUrls: ['./loft-doors.component.scss'],
  imports: [DataViewModule],
  standalone: true,
})
export class LoftDoorsComponent {
  offerItems = [
    {
      name: 'DRZWI LOFTOWE',
      image: 'loft.jpg',
      url: 'oferta/drzwi-loftowe-drzwi-szklane/drzwi-loftowe',
    },
    {
      name: 'DRZWI SZKLANE',
      image: 'glass.jpg',
      url: 'oferta/drzwi-loftowe-drzwi-szklane/drzwi-szklane',
    },
    {
      name: 'DRZWI SZKLANE\nDO WIATROŁAPU',
      image: 'vestibule.jpg',
      url: 'oferta/drzwi-loftowe-drzwi-szklane/drzwi-szklane-do-wiatrolapu',
    },
  ];
}
