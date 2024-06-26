import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-old-frame',
  templateUrl: './old-frame.component.html',
  styleUrls: ['./old-frame.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalOldFrameComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
