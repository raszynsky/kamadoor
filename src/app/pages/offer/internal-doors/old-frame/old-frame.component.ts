import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-old-frame',
  templateUrl: './old-frame.component.html',
  styleUrls: ['./old-frame.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalOldFrameComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
