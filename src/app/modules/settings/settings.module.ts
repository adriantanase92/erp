import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './page/settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule,

    SharedModule
  ]
})
export class SettingsModule { }
