import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-external-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class ExternalBaranskiComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
