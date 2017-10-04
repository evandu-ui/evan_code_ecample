import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
            <app-amessage-input></app-amessage-input>
        </div>
        <hr>
        <div class="row">
            <app-amessage-list></app-amessage-list>
        </div>
    `
})
export class AMessagesComponent {

}