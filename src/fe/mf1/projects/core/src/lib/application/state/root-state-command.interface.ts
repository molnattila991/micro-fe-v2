import { Observable } from "rxjs";

export interface IRootStateCommand {
    openSidebar(): void;
    closeSidebar(): void;
}

export interface IRootStateQuery {
    getSidebarState(): Observable<boolean>;
}