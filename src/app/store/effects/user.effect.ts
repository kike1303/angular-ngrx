import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, withLatestFrom } from "rxjs/operators";

import { IAppState } from "../state/app.state";

import { UserService } from "../../services/user.service";
import { IUserHttp } from "../../models/http-models/user-http.interface";
import { selectUserList } from "../selectors/user.selector";
import {
  EUserAction,
  GetUserSuccess,
  GetUsersSuccess
} from "../actions/user.actions";
import { Store, select } from "@ngrx/store";

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUserAction.GetUser),
      withLatestFrom(this.store.pipe(select(selectUserList))),
      switchMap(([id, users]) => {
        const selectedUser = users.find(user => user.id === Number(id[0]));
        return of(GetUserSuccess(selectedUser));
      })
    )
  );

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EUserAction.GetUsers),
      switchMap(() => this.userService.getUsers()),
      switchMap((userHttp: IUserHttp) =>
        of(GetUsersSuccess({ payload: userHttp.users }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<IAppState>
  ) {}
}
