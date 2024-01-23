import { Component } from '@angular/core';
import { ProductionBoardDto } from '@model';
import {
  KPI_DATAS,
  PRODUCT_BORDER_DATAS,
  SHORTCUT_DATAS,
  TODO_LIST_DATAS,
} from '@data';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.less'],
})
export class ProductionComponent {
  borderData: ProductionBoardDto[] = PRODUCT_BORDER_DATAS;
  todoListData = TODO_LIST_DATAS;
  shortcutData = SHORTCUT_DATAS;
  kpiDatas = KPI_DATAS;

  shortcutClass: Record<string, string> = {
    blue: 'bg-blue-400 mt-2 mb-4 h-12 w-12 p-1 rounded-3xl inline-block',
    orange: 'bg-orange-400 mt-2 mb-4 h-12 w-12 p-1 rounded-3xl inline-block',
    emerald: 'bg-emerald-400 mt-2 mb-4 h-12 w-12 p-1 rounded-3xl inline-block',
  };

  todoClass: Record<string, string> = {
    blue: 'bg-blue-400 h-12 w-12 pt-2 rounded-3xl inline-block text-center',
    orange: 'bg-orange-400 h-12 w-12 pt-2 rounded-3xl inline-block text-center',
    emerald:
      'bg-emerald-400 h-12 w-12 pt-2 rounded-3xl inline-block text-center',
    gray: 'bg-gray-400 h-12 w-12 pt-2 rounded-3xl inline-block text-center',
  };

  borderClass: Record<string, string> = {
    emerald: 'text-emerald-400',
  };

  kpiDivClass: Record<string, string> = {
    orange: 'basis-16 bg-orange-100 my-1 mx-1',
    blue: 'basis-16 bg-blue-100 my-1 mx-1',
    emerald: 'basis-16 bg-emerald-100 my-1 mx-1',
  };
  kpiDataClass: Record<string, string> = {
    orange: 'text-orange-400 text-xl',
    blue: 'text-blue-400 text-xl',
    emerald: 'text-emerald-400 text-xl',
  };
}
