import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-loft-loft',
  templateUrl: './loft.component.html',
  styleUrls: ['./loft.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class LoftLoftComponent {
  numbers = Array.from({ length: 0 }, (_, i) => i + 1);
}
