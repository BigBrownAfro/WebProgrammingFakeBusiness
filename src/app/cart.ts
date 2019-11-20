import { Item } from './item';

export class Cart{
    items:Item[];
    quantities:number[];
    size:number;

    constructor(){
        this.items = [];
        this.quantities = [];
        this.size = 0;
    }

    /**
     * Pushes a new item into the list of items and updates the size of the cart
     * If item is already in the list, quantity associated with item increments by one
     * @param i Item to be added
     */
    public add(i:Item){
        let index = this.items.indexOf(i)
        console.log(index);

        if(index === -1){
            console.log('new item added');
            
            this.size = this.items.push(i);
            this.quantities.push(1);
        }else{
            this.quantities[index] += 1;
            console.log("quantity: " + this.quantities[index]);
        }
    }
}