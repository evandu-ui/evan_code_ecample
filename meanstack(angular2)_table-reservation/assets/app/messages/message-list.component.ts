import { Component, OnInit } from "@angular/core";

import { User } from "../auth/user.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2 c" >
            <app-message
                   [info]="messages"
                    ></app-message>
        </div>
    `,

})
export class MessageListComponent implements OnInit {
    messages: User;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (message: User) => {
                    this.messages = message;
                    console.log(message);
                }
            );
    }
}