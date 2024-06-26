import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalBaranskiComponent {
  numbers = Array.from({ length: 24 }, (_, i) => i + 1);
}
