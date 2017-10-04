import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { AMessageService } from "./message.service";

@Component({
    selector: 'app-amessage-list',
    template: `searchByName<input type="text" [(ngModel)]="test">
        <div class="col-md-8 col-md-offset-2" *ngFor="let message of messages" >
            <app-amessage
                   [message]="message"  *ngIf="(test=='')||(message.firstName==test)"
                     ></app-amessage>
        </div>
    `
})
export class AMessageListComponent implements OnInit {
    messages: Message[];
test:string;
    constructor(private messageService: AMessageService) {

    }

    ngOnInit() {
         this.test='';
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}