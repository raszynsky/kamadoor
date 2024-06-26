import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-voster',
  templateUrl: './voster.component.html',
  styleUrls: ['./voster.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalVosterComponent {
  numbers = Array.from({ length: 16 }, (_, i) => i + 1);
}
