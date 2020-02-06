import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from "../actions/user.actions";
import { initialUserState, IUserState } from "../state/user.state";
import { IUser } from "src/app/models/user.interface";

export const userReducer = createReducer(
  initialUserState,
  on(
    UserActions.GetUsersSuccess,
    (state: IUserState, { payload }: { payload: IUser[] }) => ({
      ...state,
      users: payload
    })
  ),
  on(UserActions.GetUserSuccess, (state: IUserState, payload: IUser) => ({
    ...state,
    selectedUser: payload
  }))
);

// export function reducer(state: IUserState | undefined, action: Action) {
//     return userReducer(state, action);
//   }
