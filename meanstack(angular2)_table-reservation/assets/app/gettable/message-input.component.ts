import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { GMessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-gmessage-input',
    templateUrl: './message-input.component.html'
})
export class GMessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: GMessageService) {}

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.email = form.value.email;
            //this.message.password = form.value.password;
            //this.message.code = form.value.code;
            this.message.firstName = form.value.firstName;
            this.message.date = form.value.date;
            this.message.size = form.value.size;
            this.message.status = form.value.status;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}