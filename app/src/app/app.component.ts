import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'QURAS BLOCKEXPLORER';
  q: string;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'ja']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ja/) ? browserLang : 'en');
  }

  setLang(lang: string): void {
    this.translate.use(lang);
  }

  search(): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.q }
    });
    this.q = '';
  }
}
