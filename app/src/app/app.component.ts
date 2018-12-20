import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'QURAS BLOCKEXPLORER';

  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ja']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ja/) ? browserLang : 'en');
  }

  setLang(lang: string): void {
    this.translate.use(lang);
  }
}
