import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalDallasComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
