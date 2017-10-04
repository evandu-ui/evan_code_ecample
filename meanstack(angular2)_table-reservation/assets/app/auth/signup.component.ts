import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
show:string;
    constructor(private authService: AuthService) {
        this.show='';
    }

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            '',
            this.myForm.value.firstName,

            this.myForm.value.date,
            this.myForm.value.size,
            this.myForm.value.t
        );
        this.authService.signup(user)
            .subscribe(
                data => {
                    console.log(data);
                    this.show=data.obj._id;
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required),
            size:new FormControl(null, Validators.required),
            t:new FormControl(null)
        });
    }
}