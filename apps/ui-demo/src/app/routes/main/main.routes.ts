import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame/main-frame.component';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    children: [],
  },
];

@NgModule({
  declarations: [MainFrameComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutesModule {}
