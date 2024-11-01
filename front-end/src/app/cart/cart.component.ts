import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public product:any=[];
  TotalPrice:number;

constructor(private cartservice:CartService,private router:Router){}


ngOnInit(){
//   this.cartservice.sendproduct.subscribe(res=>{
//     this.product=res;
//   console.log(this.product);
  
// });
    // this.product=this.cartservice.products;
    // this.TotalPrice=this.cartservice.grandTotal

    this.cartservice.getproducts();

}


onDelete(index:number){

this.cartservice.RemoveItem(index);
this.TotalPrice=this.cartservice.grandTotal;
this.product=this.cartservice.products;

}
 


DecreaseItem(index:number){

  this.cartservice.DecreaseQuantity(index);

  this.product=this.cartservice.products;

  this.TotalPrice=this.cartservice.grandTotal;

  console.log(this.cartservice.grandTotal);

}


IncreaseItem(index:number){

  this.cartservice.IncreaseQuantity(index);

  this.product=this.cartservice.products;

  this.TotalPrice=this.cartservice.grandTotal;

}


ShopMore(){
  this.router.navigate(['products']);
}



RemoveAll(){
  this.cartservice.RemoveAll();

  this.product=this.cartservice.product;
}
 
 


}




