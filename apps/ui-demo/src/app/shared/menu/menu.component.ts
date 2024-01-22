import { Component, Input } from '@angular/core';
import { MenuDto } from '@model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  @Input() rhData: MenuDto[] = [];
}
