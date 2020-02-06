import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersContainerComponent } from "./containers/users/users.component";
import { UsersComponent } from "./components/users/users.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserComponent } from "./containers/user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./store/reducers/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/effects/user.effect";
import { ConfigEffects } from "./store/effects/config.effects";
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { UserService } from "./services/user.service";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
