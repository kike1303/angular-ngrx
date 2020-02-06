import { createAction, props } from '@ngrx/store';
import { IConfig } from '../../models/config.interface';

export enum EUserAction {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export const GetConfig = createAction(
    EUserAction.GetConfig
);

export const GetConfigSuccess = createAction(
    EUserAction.GetConfigSuccess,
    props<{ payload: IConfig }>()
);