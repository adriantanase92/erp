import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent
  ],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
})
export class HomeModule {}
