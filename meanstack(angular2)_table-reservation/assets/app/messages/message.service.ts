import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "../auth/user.model";

@Injectable()
export class MessageService {
    private messages: User;
    messageIsEdit = new EventEmitter<User>();

    constructor(private http: Http) {
    }



    getMessages() {

        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('http://localhost:3000/message'+ token)
            .map((response: Response) => {
                 const messagess = response.json().obj;
                   let tm:User=new User(messagess.email,'',messagess._id,messagess.firstName,messagess.date,messagess.size,messagess.table);

                this.messages = tm;
                return tm;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editMessage(message: User) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: User) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/message/' + message.code + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: User) {

        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/message/' + message.code + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}