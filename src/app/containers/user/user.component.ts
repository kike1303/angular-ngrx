import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { selectSelectedUser } from "src/app/store/selectors/user.selector";
import { GetUser } from "src/app/store/actions/user.actions";

@Component({
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(GetUser(this.route.snapshot.params.id));
  }
}
