import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ProductionComponent } from './production/production.component';
import { CommonModule } from '@angular/common';
import { AntModule } from '../data/ant-module.data';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...AntModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  declarations: [CockpitComponent, ProductionComponent],
  providers: [],
  exports: [],
})
export class PagesModule {}
