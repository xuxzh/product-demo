import { Component } from '@angular/core';
import { MenuDto } from '@model';
import { MENU_DATAS } from '@data';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.less'],
})
export class MainFrameComponent {
  menuData: MenuDto[] = MENU_DATAS || [];
}
