import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-dre',
  templateUrl: './dre.component.html',
  styleUrls: ['./dre.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalDreComponent {
  numbers = Array.from({ length: 0 }, (_, i) => i + 1);
}
