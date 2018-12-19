import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { AssetRoutingModule } from './asset-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    AssetsComponent,
    AssetComponent
  ],
  imports: [
    ShareModule,
    ComponentsModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
