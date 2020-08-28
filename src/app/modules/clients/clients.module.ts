import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './page/clients/clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    ClientsRoutingModule,

    SharedModule
  ]
})
export class ClientsModule { }
