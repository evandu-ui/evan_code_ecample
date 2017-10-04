import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { User } from "../auth/user.model";

@Component({
    selector: 'app-message-input',

    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: User;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {

            // Edit
        console.log(this.message);
            this.message.date

                  = form.value.date;
        this.message.size= form.value.size;
        console.log(this.message);
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;

        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: User) => this.message = message
        );
    }
}