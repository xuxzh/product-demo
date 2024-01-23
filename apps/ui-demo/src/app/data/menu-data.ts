import { MenuDto } from '@model';

export const MENU_DATAS: MenuDto[] = [
  {
    MenuCode: 'Cockpit',
    MenuName: '驾驶舱',
    Url: '/main/cockpit',
    Icon: 'pie-chart',
  },
  {
    MenuCode: 'SaleManage',
    MenuName: '销售管理',
    Url: '/main/SaleManage',
    Icon: 'account-book',
  },
  {
    MenuCode: 'PurchaseManage',
    MenuName: '采购管理',
    Url: '/main/PurchaseManage',
    Icon: 'read',
  },
  {
    MenuCode: 'StoreManage',
    MenuName: '仓库管理',
    Url: '/main/StoreManage',
    Icon: 'bank',
  },
  {
    MenuCode: 'QualityManage',
    MenuName: '质量管理',
    Url: '/main/QualityManage',
    Icon: 'security-scan',
  },
  {
    MenuCode: 'ProductionManage',
    Url: '/main/production',
    MenuName: '生产管理',
    Icon: 'tool',
  },
];
