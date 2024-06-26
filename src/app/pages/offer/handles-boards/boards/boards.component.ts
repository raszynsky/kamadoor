import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-handles-boards-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  imports: [ImageModule],
  standalone: true,
})
export class HandlesBoardsBoardsComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
