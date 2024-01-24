import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MenuDto } from '@model';
import { MENU_DATAS } from '@data';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.less'],
})
export class MainFrameComponent implements OnDestroy {
  menuData: MenuDto[] = MENU_DATAS || [];

  currentMenu?: MenuDto;

  logoPath = './assets/images/logo.png';

  routerEventSub!: Subscription;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public cdk: ChangeDetectorRef
  ) {
    this.routerEventSub = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => (route?.firstChild ? route.firstChild : route)),
        filter((route) => route.outlet === 'primary')
      )
      .subscribe(() => {
        const url = this.router.routerState.snapshot.url;
        if (url) {
          this.currentMenu = this.menuData.find((ele) => ele.Url === url);
          if (this.currentMenu) {
            this.currentMenu.active = true;
          }
        }
      });
  }

  navigateToMenu(menu: MenuDto) {
    this.router.navigate([menu.Url]).then(() => {
      this.currentMenu = menu;
      this.cdk.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventSub) {
      this.routerEventSub.unsubscribe();
    }
  }
}
