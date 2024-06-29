import { Component } from '@angular/core';

import { ImagePreviewComponent } from '@components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-handles-boards-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class HandlesBoardsBoardsComponent {
  numbers = Array.from({ length: 12 }, (_, i) => i + 1);
}
