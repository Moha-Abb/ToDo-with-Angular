// export class Task {

//     constructor(

//         // public id: string = '',

//         public title: string = '',
//         public content: string = '',
//         public complete: boolean = false
//     ) { }
// }

export interface Task {

    id: number;
    attributes: {
        title: string;
        content: string;
        complete: boolean
        // Otros campos
    };
}