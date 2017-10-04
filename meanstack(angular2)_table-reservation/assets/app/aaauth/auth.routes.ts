import { Routes } from "@angular/router";

import { AAASignupComponent } from "./signup.component";
import { AAASigninComponent } from "./signin.component";
import { AAALogoutComponent } from "./logout.component";

export const AAAUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: AAASignupComponent },
    { path: 'signin', component: AAASigninComponent },
    { path: 'logout', component: AAALogoutComponent }
];