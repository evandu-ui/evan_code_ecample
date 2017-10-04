import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import { AMessageService } from "./am/message.service";
import { GMessageService } from "./gettable/message.service";
@Component({
    selector: 'my-app',

    templateUrl: './app.component.html',
    providers: [[MessageService],[AMessageService],[GMessageService]]
})
export class AppComponent {
}