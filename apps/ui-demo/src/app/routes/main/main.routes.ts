import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { SharedModule } from '@shared';
import { PagesModule, CockpitComponent, ProductionComponent } from '@pages';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

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
    CommonModule,
    SharedModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzAvatarModule,
    PagesModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainRoutesModule {}
