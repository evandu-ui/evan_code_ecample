import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
            <app-gmessage-input></app-gmessage-input>
        </div>
        <hr>
        
        <div class="row">
            <app-gmessage-list></app-gmessage-list>
        </div>
    `
})
export class GMessagesComponent {

}