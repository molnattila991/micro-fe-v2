export interface ToasterOption {
    enableHtml: boolean;
    timeOut: number
}

export interface IToaster {
    error(message: string, title: string, option?: ToasterOption): void;
}