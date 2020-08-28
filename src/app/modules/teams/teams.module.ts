import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './page/teams/teams.component';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    TeamsRoutingModule,

    SharedModule
  ]
})
export class TeamsModule { }
