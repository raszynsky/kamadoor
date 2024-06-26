import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-apartment-internal-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class ApartmentInternalDallasComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
