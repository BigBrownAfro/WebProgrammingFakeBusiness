export class Item{
    name:string;
    price:number;
    category:string;
    imageURL:string;

    constructor(n, p, c, i){
        this.name = n;
        this.price = p;
        this.category = c;
        this.imageURL = i;
    }
}