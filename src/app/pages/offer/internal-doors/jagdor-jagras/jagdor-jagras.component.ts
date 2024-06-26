import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-internal-jagdor-jagras',
  templateUrl: './jagdor-jagras.component.html',
  styleUrls: ['./jagdor-jagras.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class InternalJagdorJagrasComponent {
  numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
