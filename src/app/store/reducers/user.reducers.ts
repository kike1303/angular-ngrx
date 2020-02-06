import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

const userReducer = createReducer(
    initialUserState,
    on(UserActions.GetUsersSuccess , (state, { payload }) => ({ ...state, payload })),
    on(UserActions.GetUserSuccess , (state, { payload }) => ({ ...state, payload })),
)

export function reducer(state: IUserState | undefined, action: Action) {
    return userReducer(state, action);
  }