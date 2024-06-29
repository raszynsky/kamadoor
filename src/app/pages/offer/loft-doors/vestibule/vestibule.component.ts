import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-loft-vestibule',
  templateUrl: './vestibule.component.html',
  styleUrls: ['./vestibule.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class LoftVestibuleComponent {
  numbers = Array.from({ length: 93 }, (_, i) => i + 1);
}
