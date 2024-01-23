import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuDto } from '@model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  @Input() rhData: MenuDto[] = [];
  @Output() rhMenuClickChange = new EventEmitter<MenuDto>();

  clickMenu(menu: MenuDto) {
    this.rhMenuClickChange.emit(menu);
  }
}
