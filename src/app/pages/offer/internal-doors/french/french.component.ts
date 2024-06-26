import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalFrenchComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
