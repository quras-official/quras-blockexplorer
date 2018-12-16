import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { AssetRoutingModule } from './asset-routing.module';

@NgModule({
  declarations: [
    AssetsComponent,
    AssetComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
