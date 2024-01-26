export interface Task {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: string;
}

export interface Status {
  name: string;
  icon: string;
  iconBgColor: string;
  bgColor: string;
}

export interface Icon {
  icon: string;
}
