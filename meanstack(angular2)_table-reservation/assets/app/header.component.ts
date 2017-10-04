import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">User_Info</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">User_Booking</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/adminauth']">Admin_Reg</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/adminlook']">Admin_content</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/gettable']">lookup_table</a></li>
                </ul>
            </nav>
        </header>
    `,
   
})
export class HeaderComponent {

}