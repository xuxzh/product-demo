import { ChangeDetectorRef, Component } from '@angular/core';
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

  currentMenu?: MenuDto;

  logoPath = './assets/images/logo.png';

  constructor(public router: Router, public cdk: ChangeDetectorRef) {
    //
  }

  navigateToMenu(menu: MenuDto) {
    this.router.navigate([menu.Url]).then(() => {
      this.currentMenu = menu;
      this.cdk.markForCheck();
    });
  }
}
