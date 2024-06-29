import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-apartment-internal-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class ApartmentInternalBaranskiComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
