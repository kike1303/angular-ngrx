import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserAction {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export const GetUsers = createAction(
    EUserAction.GetUsers
);

export const GetUsersSuccess = createAction(
    EUserAction.GetUsersSuccess,
    props<{ payload: IUser[] }>()
);

export const GetUser = createAction(
    EUserAction.GetUser,
    props<{ payload: number }>()
);

export const GetUserSuccess = createAction(
    EUserAction.GetUserSuccess,
    props<{ payload: IUser }>()
);