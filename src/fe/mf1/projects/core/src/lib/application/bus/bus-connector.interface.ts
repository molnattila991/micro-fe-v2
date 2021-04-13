export interface IBusConnector extends IBusIsConnected {
    initialize(): void;
    subscribe(eventName: string, func: (data: any) => void): void;
    unSubscribe(eventName: string): void;
    dispatchEvent(eventName: string, data: any): void;
    isConnected(): boolean;
}

export interface IBusIsConnected {
    isConnected(): boolean;
}