import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-loft-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class LoftGlassComponent {
  numbers = Array.from({ length: 116 }, (_, i) => i + 1);
}
