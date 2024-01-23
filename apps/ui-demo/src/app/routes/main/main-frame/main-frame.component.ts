import { Component } from '@angular/core';
import { MenuDto } from '@model';
import { MENU_DATAS } from '@data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.less'],
})
export class MainFrameComponent {
  menuData: MenuDto[] = MENU_DATAS || [];

  logoPath = './assets/images/logo.png';

  constructor(public router: Router) {
    //
  }

  navigateToMenu(menu: MenuDto) {
    this.router.navigate([menu.Url]);
  }
}
