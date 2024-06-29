import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-apartment-internal-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class ApartmentInternalDallasComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
