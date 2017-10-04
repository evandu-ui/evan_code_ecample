import { Component, Input } from "@angular/core";

import { User } from "../auth/user.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
       
    `]
})
export class MessageComponent {
    @Input() info: User;

    constructor(private messageService: MessageService) {

    }

    onEdit() {
        this.messageService.editMessage(this.info);
        //console.log(this.info);

    }

    onDelete() {
        this.messageService.deleteMessage(this.info)
            .subscribe(
                result => console.log(result)
            );
    }


}