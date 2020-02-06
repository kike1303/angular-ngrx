import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { EConfigAction, GetConfigSuccess } from "../actions/config.actions";
import { ConfigService } from "src/app/services/config.service";
import { IConfig } from "src/app/models/config.interface";

@Injectable()
export class ConfigEffects {
  getConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EConfigAction.GetConfig),
      switchMap(() => this.configService.getConfig()),
      switchMap((config: IConfig) => of(GetConfigSuccess(config)))
    )
  );

  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) {}
}
