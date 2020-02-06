import { Component, OnInit } from "@angular/core";
import { IAppState } from "./store/state/app.state";
import { Store, select } from "@ngrx/store";
import { selectConfig } from "./store/selectors/config.selectors";
import { GetConfig } from "./store/actions/config.actions";
import { Observable } from "rxjs";
import { IConfig } from "./models/config.interface";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-ngrx";
  config$: Observable<IConfig>;

  constructor(private store: Store<IAppState>) {
    this.config$ = store.pipe(select(selectConfig));
  }

  ngOnInit() {
    this.store.dispatch(GetConfig());
  }
}
