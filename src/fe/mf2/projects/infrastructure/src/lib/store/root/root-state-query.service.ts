import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IRootStateQuery, UiState } from "projects/core/src/public-api";
import { Observable } from "rxjs";

@Injectable()
export class RootStateQuery implements IRootStateQuery {
    constructor(private store: Store<{ ui: UiState }>) {
    }
    getSidebarState(): Observable<boolean> {
        return this.store.select(item=>item.ui.opened);
    }
}