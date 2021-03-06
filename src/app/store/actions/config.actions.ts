import { createAction, props } from "@ngrx/store";
import { IConfig } from "../../models/config.interface";

export enum EConfigAction {
  GetConfig = "[Config] Get Config",
  GetConfigSuccess = "[Config] Get Config Success"
}

export const GetConfig = createAction(EConfigAction.GetConfig);

export const GetConfigSuccess = createAction(
  EConfigAction.GetConfigSuccess,
  props<IConfig>()
);
