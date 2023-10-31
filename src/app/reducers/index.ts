import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {routerReducer} from "@ngrx/router-store";

import {environment} from "../../environments/environment";

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [debug];
