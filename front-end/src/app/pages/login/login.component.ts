import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    
userRegister:any={
  "CustId":0,
  "Name":"",
  "MobileNo":"",
  "password":""
}

showLoginModal:boolean=true;


constructor(private Productservice:ProductService,private router:Router){}

  onRegister(){

    console.log("registering");

    this.Productservice.onRegister(this.userRegister).subscribe((res:any)=>{
      if(res.result){
        alert("SignUp Success");
        this.router.navigate(['/']);
      }else{
        alert(res.message);
      }
    })
  }

  nav(){
    this.router.navigate(['/']);
  }


}
