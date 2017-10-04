export class User {
    constructor(public email: string,
                public password: string,
                public code:string,
                public firstName?: string,
                public date?: string,
                public  size?:string,
                public  t?:string,
    ) {}
}