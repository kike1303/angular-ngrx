import { Component, OnInit } from "@angular/core";
import { IAppState } from "src/app/store/state/app.state";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { selectUserList } from "src/app/store/selectors/user.selector";
import { GetUsers } from "src/app/store/actions/user.actions";

@Component({
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersContainerComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(["user", id]);
  }
}
