import { IActive } from './common.model';

export interface MenuDto extends IActive {
  MenuCode: string;
  MenuName: string;
  Url: string;
  Icon: string;
}
