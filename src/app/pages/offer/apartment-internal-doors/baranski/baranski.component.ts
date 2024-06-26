import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-apartment-internal-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class ApartmentInternalBaranskiComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
