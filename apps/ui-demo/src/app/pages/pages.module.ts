import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ProductionComponent } from './production/production.component';
import { CommonModule } from '@angular/common';
import { AntModule } from '../data/ant-module.data';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ...AntModule, SharedModule],
  declarations: [CockpitComponent, ProductionComponent],
  providers: [],
  exports: [],
})
export class PagesModule {}
