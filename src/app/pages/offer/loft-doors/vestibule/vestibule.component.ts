import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-loft-vestibule',
  templateUrl: './vestibule.component.html',
  styleUrls: ['./vestibule.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class LoftVestibuleComponent {
  numbers = Array.from({ length: 93 }, (_, i) => i + 1);
}
