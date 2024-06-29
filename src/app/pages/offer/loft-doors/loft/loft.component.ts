import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-loft-loft',
  templateUrl: './loft.component.html',
  styleUrls: ['./loft.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class LoftLoftComponent {
  numbers = Array.from({ length: 0 }, (_, i) => i + 1);
}
