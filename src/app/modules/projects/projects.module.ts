import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './page/projects/projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    ProjectsRoutingModule,

    SharedModule
  ]
})
export class ProjectsModule { }
