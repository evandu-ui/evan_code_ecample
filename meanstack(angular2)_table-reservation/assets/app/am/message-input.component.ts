import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AMessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-amessage-input',
    templateUrl: './message-input.component.html'
})
export class AMessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: AMessageService) {}

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.email = form.value.email;
            this.message.password = form.value.password;
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
        } else {
            // Create
            const message = new Message(form.value.email,
                form.value.password,
                form.value.code,
                form.value.status,
                form.value.firstName,
                form.value.date,
                form.value.size,
                form.value.table
            );
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
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