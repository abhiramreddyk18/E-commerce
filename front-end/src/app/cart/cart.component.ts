import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public products:any=[];
  totalPrice;

constructor(private cartservice:CartService,private router:Router){}


ngOnInit(){

  this.updateAllProducts();
}

DecreaseItem(index:number){
  const product = this.products[index];

  if (product.quantity > 1) {
    this.cartservice.removeFromCart(this.products[index]);
    product.quantity--;
  } else {
    this.cartservice.removeFromCart(this.products[index]);
    this.products.splice(index, 1);
  }

  this.calculateTotalPrice();

 
}


IncreaseItem(index:number){

  const product = this.products[index];
  
  product.quantity++;

  this.calculateTotalPrice();
    
  this.cartservice.addtocart(this.products[index]);
}


ShopMore(){
  this.router.navigate(['products']);
}



updateAllProducts(){
this.cartservice.getproducts().subscribe(res=>{
    this.products=res;
    this.calculateTotalPrice();
  },error=>{
    console.log(error);
  })

}


private calculateTotalPrice(): void {
  this.totalPrice = this.products.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),0);
}

 
 


}




