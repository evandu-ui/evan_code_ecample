import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { GMessageService } from "./message.service";

@Component({
    selector: 'app-gmessage-list',
    template: `
        <div class="col-md-8 col-md-offset-2"  >
            <app-gmessage
                   [message]="message"  *ngFor="let message of messages"
                     ></app-gmessage>
        </div>
    `
})
export class GMessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: GMessageService) {

    }

    ngOnInit() {

        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    console.log('hh'+messages);
                    this.messages = messages;

                }
            );
    }
}