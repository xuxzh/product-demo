import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { SharedModule } from '@shared';
import { PagesModule, CockpitComponent, ProductionComponent } from '@pages';
import { NzIconModule } from 'ng-zorro-antd/icon';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    children: [
      {
        path: 'cockpit',
        component: CockpitComponent,
      },
      {
        path: 'production',
        component: ProductionComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [MainFrameComponent],
  imports: [
    SharedModule,
    NzIconModule,
    PagesModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainRoutesModule {}
