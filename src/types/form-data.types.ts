export interface Task {
    id: string;
    name: string;
    description: string;
    icon: string;
    status: string;
};

export interface Status {
    type: StatusType
    name: string;
    icon: string;
    iconBgColor: string;
    bgColor: string;
};

export enum StatusType {
    InProgress = 'In progress',
    Completed = 'Completed',
    Later = 'Do Later',
    ToDo = 'To do',
}

export interface Icon {
    icon: string;
}

