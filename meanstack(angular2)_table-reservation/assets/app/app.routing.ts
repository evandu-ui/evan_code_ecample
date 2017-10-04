import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AAAuthenticationComponent } from "./aaauth/authentication.component";
import { AMessagesComponent } from "./am/messages.component";
import { GMessagesComponent } from "./gettable/messages.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { AAAUTH_ROUTES } from "./aaauth/auth.routes";
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
    { path: 'adminauth', component: AAAuthenticationComponent, children: AAAUTH_ROUTES },
    { path: 'adminlook', component: AMessagesComponent },
    { path: 'gettable', component: GMessagesComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);