import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-external-kmt',
  templateUrl: './kmt.component.html',
  styleUrls: ['./kmt.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class ExternalKMTComponent {
  numbers1To8 = Array.from({ length: 8 }, (_, i) => i + 1);
  numbers9To16 = Array.from({ length: 8 }, (_, i) => i + 9);
}
