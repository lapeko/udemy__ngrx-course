import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  selectAuthState,
  (authState) => !!authState.user,
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn,
)
