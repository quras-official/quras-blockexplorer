import { Component } from '@angular/core';
import { LocalStorage } from 'ngx-webstorage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QURAS BLOCKEXPLORER';
  @LocalStorage() lang;

  constructor(
  ) {}

}
