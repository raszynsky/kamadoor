import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'kamadoor-root',
  templateUrl: './app.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
})
export class AppComponent {}
