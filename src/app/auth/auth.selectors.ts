import {createSelector} from "@ngrx/store";

export const isLoggedIn = createSelector(
  state => state["auth"],
  (authState) => !!authState.user,
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn,
)
