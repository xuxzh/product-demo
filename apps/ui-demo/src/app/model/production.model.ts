export interface ProductionBoardDto {
  title: string;
  subtitle: string;
  icon: string;
  data: number;
  subData: number;
  preset?: boolean;
  color: string;
  degree?: number;
}

export interface ProductionTodoListDto {
  title: string;
  icon: string;
  preset?: boolean;
  bg: string;
  color?: string;
  degree?: number;
  data: number;
}

export interface ProductionStatusDto {
  content: string;
  date: string;
  status: string;
}
