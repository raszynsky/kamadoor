import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@root/src/app/components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-voster',
  templateUrl: './voster.component.html',
  styleUrls: ['./voster.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalVosterComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
