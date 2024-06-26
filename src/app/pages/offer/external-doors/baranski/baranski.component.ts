import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-external-baranski',
  templateUrl: './baranski.component.html',
  styleUrls: ['./baranski.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class ExternalBaranskiComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
