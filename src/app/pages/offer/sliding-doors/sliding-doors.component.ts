import { Component } from '@angular/core';

import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kamadoor-sliding-doors',
  templateUrl: './sliding-doors.component.html',
  styleUrls: ['./sliding-doors.component.scss'],
  imports: [DataViewModule],
  standalone: true,
})
export class SlidingDoorsComponent {
  offerItems = [
    {
      name: 'DRZWI PRZESUWNE\nSZKLANE',
      image: 'noPhoto.jpg',
      url: 'oferta/drzwi-przesuwne/szklane',
    },
    {
      name: 'DRZWI PRZESUWNE\nDREWNIANE',
      image: 'noPhoto.jpg',
      url: 'oferta/drzwi-przesuwne/drewniane',
    },
    {
      name: 'DRZWI ŁAMANE\nDRZWI SKŁADANE',
      image: 'noPhoto.jpg',
      url: 'oferta/drzwi-przesuwne/lamane-skladane',
    },
  ];
}
