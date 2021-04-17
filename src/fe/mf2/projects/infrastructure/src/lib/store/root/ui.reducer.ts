import { createReducer, on } from "@ngrx/store";
import { closeSideNav, openSideNav } from "./ui.actions";

const load = () => {
    const loadFromLocalStorage = localStorage.getItem("appState");
    if (loadFromLocalStorage != undefined) {
        return (JSON.parse(loadFromLocalStorage)).ui
    } else {
        return {
            opened: true
        };
    }
}
export const initialState: Readonly<any> = load()

const _uiReducer = createReducer(
    initialState,
    on(openSideNav, (state) => ({ ...state, opened: true })),
    on(closeSideNav, (state) => ({ ...state, opened: false }))
)

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}