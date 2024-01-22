import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { AntModule } from '@data';

const COMPS = [MenuComponent];

@NgModule({
  imports: [CommonModule, ...AntModule],
  declarations: [...COMPS],
  providers: [],
  exports: [...COMPS],
})
export class SharedModule {}
