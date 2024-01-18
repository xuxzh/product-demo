import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const COMPS: any[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPS],
  providers: [],
  exports: [...COMPS],
})
export class LayoutModule {}
