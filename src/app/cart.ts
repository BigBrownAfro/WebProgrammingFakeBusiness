import { Item } from './item';

export class Cart{
    items:Item[];
    size:number;

    constructor(){
        this.items = [];
        this.size = 0;
    }

    /**
     * Pushes a new item into the list of items and updates the size of the cart
     * @param i Item to be added
     */
    public add(i:Item){
        this.size = this.items.push(i);
    }
}