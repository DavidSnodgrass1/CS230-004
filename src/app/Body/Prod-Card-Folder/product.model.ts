export class Product {
    name:string;
    price:string;
    imagePath:string;
    
    constructor({name,price,imagePath} : 
        {name:string, price:string, imagePath:string}){
            this.name=name;
            this.price=price;
            this.imagePath=imagePath;
    }
}