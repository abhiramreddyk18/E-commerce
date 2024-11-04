import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product_id: number;
  product: any;
  newproduct:Product=new Product('','','','',0,0,0);

  constructor(private route: ActivatedRoute, private cartservice: CartService,) { }

  ngOnInit(): void {

    this.product_id = Number(this.route.snapshot.paramMap.get('id'));

    this.loadProductDetails();
  }


  loadProductDetails () {

    this.cartservice.getProductDetails(this.product_id)
      .subscribe(details => {
        this.product = details;
        console.log(this.product);
      }, error => {
        console.log(error);

      });
  }

  addToCart(item:any){
    this.newproduct=new Product (item.id,item.title,item.image,item.description,1,item.price,item.total); 
     
    this.cartservice.addtocart(this.newproduct);
      
    }



}
