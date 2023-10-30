import {createReducer, on} from '@ngrx/store';

import {User} from "../model/user.model";
import {AuthActions} from "../action-types";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User,
}

const initState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initState,
  on(AuthActions.login, (state, {user}) => ({user})),
  on(AuthActions.logout, () => ({user: undefined})),
);
