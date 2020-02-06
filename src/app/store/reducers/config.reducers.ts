import { createReducer, on } from "@ngrx/store";
import * as ConfigActions from "../actions/config.actions";
import { initialConfigState, IConfigState } from "../state/config.state";
import { IConfig } from "src/app/models/config.interface";

export const configReducer = createReducer(
  initialConfigState,
  on(
    ConfigActions.GetConfigSuccess,
    (state: IConfigState, payload: IConfig) => ({
      ...state,
      ...payload
    })
  )
);

// export function reducer(state: IConfigState | undefined, action: Action) {
//     return configReducer(state, action);
// }
