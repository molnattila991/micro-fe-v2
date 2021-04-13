import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, tap, withLatestFrom } from "rxjs/operators";

@Injectable()
export class AppEffects {
    saveGame$ = createEffect(() => this.actions$.pipe(
        switchMap((action) => of(action).pipe()
            .pipe(
                withLatestFrom(this.store.select(item => item)),
                tap(([action, appState]) => {
                    localStorage.setItem("appState", JSON.stringify(appState))
                })
            )
        )), { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private store: Store
    ) { }
}

