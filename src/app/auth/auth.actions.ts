import {createAction, props} from "@ngrx/store";
import {User} from "./model/user.model";

export const login = createAction(
  "[AUTH] user login",
  props<{user: User}>(),
);

export const logout = createAction(
  "[AUTH] user logout",
);
