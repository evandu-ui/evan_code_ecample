 import { Component, Input } from "@angular/core";

import { Message } from "./message.model";
import { GMessageService } from "./message.service";

@Component({
    selector: 'app-gmessage',
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
export class GMessageComponent {
    @Input() message: Message;

    constructor(private messageService: GMessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

}