import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigActions from '../actions/config.actions';
import { initialConfigState, IConfigState } from '../state/config.state';

export const configReducer = createReducer(
    initialConfigState,
    on(ConfigActions.GetConfigSuccess , (state, { payload }) => ({ ...state, payload })),
)

// export function reducer(state: IConfigState | undefined, action: Action) {
//     return configReducer(state, action);
// }