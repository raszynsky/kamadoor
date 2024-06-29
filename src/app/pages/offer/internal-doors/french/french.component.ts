import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalFrenchComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
