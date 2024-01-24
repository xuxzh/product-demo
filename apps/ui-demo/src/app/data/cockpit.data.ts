import { CockpitBoardDto } from '@model';

export const COCKPIT_BOARD_DATAS: CockpitBoardDto[] = [
  {
    code: 'summary',
    name: '看板总览',
    imagePath: 'assets/images/cockpit/0.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/',
  },
  {
    code: 'summary',
    name: '车间平面看板',
    imagePath: 'assets/images/cockpit/1.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/ForthScreen',
  },
  {
    code: 'summary',
    name: '周生产进度看板',
    imagePath: 'assets/images/cockpit/2.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/SecondScreen',
  },
  {
    code: 'summary',
    name: '周产量看板',
    imagePath: 'assets/images/cockpit/3.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/EighthScreen',
  },
  {
    code: 'summary',
    name: '安灯报警看板',
    imagePath: 'assets/images/cockpit/4.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/ThirdScreen',
  },
  {
    code: 'summary',
    name: '成品区实时库存看板',
    imagePath: 'assets/images/cockpit/5.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/SeventhScreen',
  },
  {
    code: 'summary',
    name: '生产质量看板',
    imagePath: 'assets/images/cockpit/6.jpg',
    url: 'http://192.168.0.88:8088/visualizationWebsite/#/NinthScreen',
  },
];
