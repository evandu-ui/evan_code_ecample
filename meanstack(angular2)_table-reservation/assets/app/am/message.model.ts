export class Message {

    constructor(public email: string,
                public password: string,
                public code:string,
                public status:string,
                public firstName: string,
                public date?: string,
                public  size?:string,
                public  table?:string

    ) {}
}