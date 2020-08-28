import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
