import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kamadoor-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
  imports: [ImageModule, NgClass],
  standalone: true,
})
export class ImagePreviewComponent {
  @Input() src!: string;
  @Input() maxH = 400;
  @Input() showBorder = true;
  @Input() label?: string;
  @Input() labelClass?: string;
}
