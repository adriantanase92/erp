import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './page/reports/reports.component';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,

    SharedModule
  ]
})
export class ReportsModule { }
