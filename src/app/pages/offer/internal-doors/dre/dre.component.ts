import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@root/src/app/components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-dre',
  templateUrl: './dre.component.html',
  styleUrls: ['./dre.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalDreComponent {
  numbers = Array.from({ length: 0 }, (_, i) => i + 1);
}
