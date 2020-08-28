import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './page/financial/financial.component';


@NgModule({
  declarations: [FinancialComponent],
  imports: [
    FinancialRoutingModule,

    SharedModule
  ]
})
export class FinancialModule { }
