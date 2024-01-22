import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { SharedModule } from '@shared';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    children: [],
  },
];

@NgModule({
  declarations: [MainFrameComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutesModule {}
