import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalBaranskiComponent {
  numbers = Array.from({ length: 24 }, (_, i) => i + 1);
}
