export class Product {
   
    constructor(
    public product_id: string,
    public name: string,
    public image:string,
    public description:string,
    public quantity: number,
    public  price: number,
    public total:number,
    ) {}
}
