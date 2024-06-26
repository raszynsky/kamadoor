import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'kamadoor-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
  imports: [AccordionModule],
  standalone: true,
})
export class GuideComponent {}
