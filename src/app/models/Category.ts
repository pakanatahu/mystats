import { OnInit } from '@angular/core';


export class Category{
    id: number;
    title: string;
    hours: number;
    constructor(id, title, hours){
        this.id = id;
        this.title = title;
        this.hours = hours;
     }

}