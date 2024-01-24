import { Component } from '@angular/core';
import { COCKPIT_BOARD_DATAS } from '@data';
import { CockpitBoardDto } from '@model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.less'],
})
export class CockpitComponent {
  boardDatas = COCKPIT_BOARD_DATAS;

  clickBoard(board: CockpitBoardDto) {
    if (!board?.url) {
      return;
    }
    window.open(board.url, '_blank', 'noopener');
  }
}
