import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authStateKey} from "./auth.actions";
import {AuthState} from "./auth.reducer";

export const authState = createFeatureSelector(authStateKey);
export const loggedIn = createSelector(
  authState,
  (state: AuthState) => !!state.user,
);
export const loggedOut = createSelector(
  loggedIn,
  (loggedIn) => !loggedIn,
);
