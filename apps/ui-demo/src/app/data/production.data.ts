import {
  ProductionBoardDto,
  ProductionStatusDto,
  ProductionTodoListDto,
} from '@model';

export const PRODUCT_BORDER_DATAS: ProductionBoardDto[] = [
  {
    title: '生产总任务',
    subtitle: '较上周',
    data: 15,
    subData: 5.5,
    icon: 'shengchanjihua',
    color: 'emerald',
  },
  {
    title: '逾期任务',
    subtitle: '较昨日',
    data: 1,
    subData: 3.5,
    icon: 'caution',
    preset: true,
    color: '',
  },
  {
    title: '紧急任务',
    subtitle: '较昨日',
    data: 0,
    subData: 0,
    icon: 'jinjirenwu',
    preset: true,
    color: '',
  },
  {
    title: '已完成任务',
    subtitle: '较昨日',
    data: 1,
    subData: 1,
    icon: 'yiwanchengrenwu',
    color: 'emerald',
  },
];

export const TODO_LIST_DATAS: ProductionTodoListDto[] = [
  {
    title: '生产计划',
    data: 7,
    icon: 'jihua',
    bg: 'orange',
  },
  {
    title: '生产排期',
    data: 11,
    icon: 'shengchanjihua',
    bg: 'orange',
  },
  {
    title: '生产领料',
    data: 0,
    icon: 'lingliao',
    bg: 'gray',
  },
  {
    title: '生产开工',
    data: 0,
    icon: 'kaigong',
    bg: 'gray',
  },
  {
    title: '工序汇报',
    data: 7,
    icon: 'gongxuhuibao',
    bg: 'emerald',
  },
  {
    title: '质检完毕',
    data: 7,
    icon: 'zhijian',
    bg: 'gray',
  },
  {
    title: '返工任务',
    data: 7,
    icon: 'fangongrenwu',
    bg: 'emerald',
  },
  {
    title: '补料申请',
    data: 7,
    icon: 'bubao',
    bg: 'gray',
  },
  {
    title: '入库申请',
    data: 7,
    icon: 'rukushenqing',
    bg: 'emerald',
  },
];

export const SHORTCUT_DATAS: (Pick<
  ProductionBoardDto,
  'icon' | 'title' | 'preset' | 'color' | 'degree'
> & { bg: string })[] = [
  {
    title: '生产计划',
    icon: 'jihua',
    bg: 'orange',
    color: 'white',
  },
  {
    title: '生产任务',
    icon: 'jihua',
    bg: 'blue',
    color: 'white',
  },
  {
    title: '生产工单',
    icon: 'jihua',
    bg: 'blue',
    color: 'white',
  },
  {
    title: '生产派工',
    icon: 'jihua',
    bg: 'blue',
    color: 'white',
  },
  {
    title: '生产报工',
    icon: 'jihua',
    bg: 'emerald',
    color: 'white',
  },
  {
    title: '提交入库',
    icon: 'jihua',
    bg: 'emerald',
    color: 'white',
  },
];

export const KPI_DATAS: (Pick<
  ProductionBoardDto,
  'title' | 'data' | 'color'
> & {
  isPercent?: boolean;
})[] = [
  {
    title: '计划数量',
    data: 100,
    color: 'blue',
  },
  {
    title: '完成数量',
    data: 104,
    color: 'emerald',
  },
  {
    title: '在制数量',
    data: 147,
    color: 'blue',
  },
  {
    title: '及时率',
    data: 0,
    color: 'blue',
    isPercent: true,
  },
  {
    title: '不合格',
    data: 1,
    color: 'orange',
  },
];

export const PRODUCTION_STATUS_DATAS: ProductionStatusDto[] = [
  {
    content: '第一阶段审批',
    date: '2023-10-30 09:00:00',
    status: '待审核',
  },
  {
    content: '第二阶段审批',
    date: '2023-10-30 10:12:00',
    status: '待审核',
  },
  {
    content: '第三阶段审批',
    date: '2023-10-30 11:45:33',
    status: '待审核',
  },
  {
    content: '第四阶段审批',
    date: '2023-10-30 13:45:25',
    status: '待审核',
  },
  {
    content: '第五阶段审批',
    date: '2023-10-30 14:55:15',
    status: '待审核',
  },
];

export const PRODUCTION_DETAIL_DATAS: {
  Category: string;
  Datas: Pick<ProductionStatusDto, 'content' | 'status'>[];
}[] = [
  {
    Category: '待生产',
    Datas: [
      {
        content: '低压开关柜 SCRW-0000397-001',
        status: '生产',
      },
      {
        content: '低压开关柜 SCRW-0000406-001',
        status: '生产',
      },
      {
        content: 'B32排水嘴 SCRW-0000409-001',
        status: '生产',
      },
      {
        content: '上层接水壶 SCRW-0000410-001',
        status: '生产',
      },
      {
        content: '压铆螺钉 SCRW-0000412-001',
        status: '生产',
      },
    ],
  },
];
