import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AMessageComponent } from "./am/message.component";
import { AMessageListComponent } from "./am/message-list.component";
import { AMessageInputComponent } from "./am/message-input.component";
import { AMessagesComponent } from "./am/messages.component";

import { GMessageComponent } from "./gettable/message.component";
import { GMessageListComponent } from "./gettable/message-list.component";
import { GMessagesComponent } from "./gettable/messages.component";
import { GMessageInputComponent } from "./gettable/message-input.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AAAuthenticationComponent } from "./aaauth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AAALogoutComponent } from "./aaauth/logout.component";
import { AAASignupComponent } from "./aaauth/signup.component";
import { AAASigninComponent } from "./aaauth/signin.component";

import { AuthService } from "./auth/auth.service";
import { AAAuthService } from "./aaauth/auth.service";
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AMessageComponent,
        AMessageListComponent,
        AMessageInputComponent,
        AMessagesComponent,
        GMessageComponent,
        GMessageListComponent,
        GMessagesComponent,
        GMessageInputComponent,
        AuthenticationComponent,
        AAAuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        AAALogoutComponent,
        AAASignupComponent,
        AAASigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [[AuthService],[AAAuthService]],

    bootstrap: [AppComponent]
})
export class AppModule {

}