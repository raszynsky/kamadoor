import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-external-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class ExternalDallasComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
