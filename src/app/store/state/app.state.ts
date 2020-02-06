import { RouterReducerState } from "@ngrx/router-store";

import { IUserState, initialUserState } from "./user.state";
import { initialConfigState, IConfigState } from "./config.state";
import { config } from "rxjs";
import { IConfig } from "src/app/models/config.interface";

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IConfig;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
