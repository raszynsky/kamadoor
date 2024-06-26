import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kamadoor-apartment-internal-doors',
  templateUrl: './apartment-internal-doors.component.html',
  styleUrls: ['./apartment-internal-doors.component.scss'],
  imports: [DataViewModule],
  standalone: true,
})
export class ApartmentInternalDoorsComponent {
  offerItems = [
    {
      name: 'Drzwi wejściowe\nBARAŃSKI',
      image: 'baranski.jpg',
      url: 'oferta/drzwi-wejsciowe-do-mieszkania/baranski',
    },
    {
      name: 'Drzwi wejściowe\nna wymiar DALLAS',
      image: 'dallas.jpg',
      url: 'oferta/drzwi-wejsciowe-do-mieszkania/dallas',
    },
    {
      name: 'Drzwi\nPRZECIWPOŻAROWE',
      image: 'fireproof.jpg',
      url: 'oferta/drzwi-wejsciowe-do-mieszkania/przeciwpozarowe',
    },
  ];
}
