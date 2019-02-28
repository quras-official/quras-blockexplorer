import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  q: string;
  title = 'QURAS BLOCKEXPLORER';
  @LocalStorage() lang;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'ja']);
    translate.setDefaultLang('en');

    if (!this.lang) {
      const browserLang = translate.getBrowserLang();
      this.lang = browserLang.match(/en|ja/) ? browserLang : 'en';
    }

    translate.use(this.lang);
  }

  setLang(lang: string): void {
    this.lang = lang;
    this.translate.use(this.lang);
  }
  
  search(): void {
    if (this.q) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.q }
      });
      this.q = '';
    }
  }
}
