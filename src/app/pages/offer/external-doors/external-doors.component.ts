import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kamadoor-external-doors',
  templateUrl: './external-doors.component.html',
  styleUrls: ['./external-doors.component.scss'],
  imports: [DataViewModule],
  standalone: true,
})
export class ExternalDoorsComponent {
  offerItems = [
    {
      name: 'Drzwi zewnętrzne\nBARAŃSKI',
      image: 'baranski.JPG',
      url: 'oferta/drzwi-zewnetrzne/baranski',
    },
    {
      name: 'Drzwi zewnętrzne\nna wymiar DALLAS',
      image: 'dallas.JPG',
      url: 'oferta/drzwi-zewnetrzne/dallas',
    },
    {
      name: 'Drzwi zewnętrzne\nKMT',
      image: 'kmt.JPG',
      url: 'oferta/drzwi-zewnetrzne/kmt',
    },
  ];
}
