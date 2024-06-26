import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-loft-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class LoftGlassComponent {
  numbers = Array.from({ length: 116 }, (_, i) => i + 1);
}
