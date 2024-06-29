import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-internal-jagdor-jagras',
  templateUrl: './jagdor-jagras.component.html',
  styleUrls: ['./jagdor-jagras.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class InternalJagdorJagrasComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
