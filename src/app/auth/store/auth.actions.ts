import {createActionGroup, emptyProps, props} from "@ngrx/store";

import {User} from "../model/user.model";

export const authStateKey = 'auth';

export const AuthActions = createActionGroup({
  source: authStateKey,
  events: {
    initLogin: emptyProps(),
    login: props<{ credentials: { email: string, password: string } }>(),
    loggedIn: props<{ user: User }>(),
    logout: emptyProps(),
  },
});
