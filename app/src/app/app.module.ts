import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {NgxWebstorageModule} from 'ngx-webstorage';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { ShareModule } from './share/share.module';
import { ComponentsModule } from './components/components.module';
import { StatusModule } from './status/status.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ApiHeaderComponent } from './api-header/api-header.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ApiHeaderComponent,
    HomeHeaderComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    StatusModule,

    NgxWebstorageModule.forRoot(),
    NgxUiLoaderModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    environment.env === 'sandbox'
      ? HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        )
      : [],

    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
