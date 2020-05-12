import { Component } from '@angular/core';
import { FIRMINFO, FEATURE_MENU } from './firm';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firm = FIRMINFO;
}
