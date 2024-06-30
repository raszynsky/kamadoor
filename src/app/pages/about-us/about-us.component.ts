import { Component } from '@angular/core';

import { ImagePreviewComponent } from '../../components/image-preview/image-preview.component';

@Component({
  selector: 'kamadoor-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [ImagePreviewComponent],
  standalone: true,
})
export class AboutUsComponent {}
