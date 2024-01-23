import { Component, OnInit } from '@angular/core';
import { ProductionBoardDto } from '@model';
import {
  KPI_DATAS,
  PRODUCTION_DETAIL_DATAS,
  PRODUCTION_STATUS_DATAS,
  PRODUCT_BORDER_DATAS,
  SHORTCUT_DATAS,
  TODO_LIST_DATAS,
} from '@data';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.less'],
})
export class ProductionComponent implements OnInit {
  borderData: ProductionBoardDto[] = PRODUCT_BORDER_DATAS;
  todoListData = TODO_LIST_DATAS;
  shortcutData = SHORTCUT_DATAS;
  kpiDatas = KPI_DATAS;
  productionStatusDatas = PRODUCTION_STATUS_DATAS.reverse();

  productionDetailDatas = PRODUCTION_DETAIL_DATAS;

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
    orange: 'basis-16 bg-orange-50 my-1 mx-1',
    blue: 'basis-16 bg-blue-50 my-1 mx-1',
    emerald: 'basis-16 bg-emerald-50 my-1 mx-1',
  };
  kpiDataClass: Record<string, string> = {
    orange: 'text-orange-600 text-xl',
    blue: 'text-blue-600 text-xl',
    emerald: 'text-emerald-600 text-xl',
  };

  options!: EChartsOption;
  ngOnInit(): void {
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}%',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: '数据统计',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            position: 'center',
            fontSize: 20,
            formatter: '{b}:{c}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 25,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 85,
              name: '合格率',
              itemStyle: {
                color: '#34d399',
              },
            },
            {
              value: 10,
              name: '不良率',
              itemStyle: {
                color: 'orange',
              },
            },
            {
              value: 5,
              name: '报废率',
              itemStyle: {
                color: 'red',
              },
            },
          ],
        },
      ],
    };

    //   const xAxisData = [];
    //   const data1 = [];
    //   const data2 = [];

    //   for (let i = 0; i < 100; i++) {
    //     xAxisData.push('category' + i);
    //     data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //     data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //   }

    //   this.options = {
    //     legend: {
    //       data: ['bar', 'bar2'],
    //       align: 'left',
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: xAxisData,
    //       silent: false,
    //       splitLine: {
    //         show: false,
    //       },
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: 'bar',
    //         type: 'bar',
    //         data: data1,
    //         animationDelay: (idx) => idx * 10,
    //       },
    //       {
    //         name: 'bar2',
    //         type: 'bar',
    //         data: data2,
    //         animationDelay: (idx) => idx * 10 + 100,
    //       },
    //     ],
    //     animationEasing: 'elasticOut',
    //     animationDelayUpdate: (idx) => idx * 5,
    //   };
    //
  }
}
