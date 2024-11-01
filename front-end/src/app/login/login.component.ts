import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginform:FormGroup;
  submitted:boolean=false;
  response="";
  constructor(private formbulider:FormBuilder,private apiservice:ApiService,private router:Router){

    this.loginform=this.formbulider.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });

  }



 get f(){
  return this.loginform.controls;
 }


  onsubmit(){

    this.submitted = true;

    if(this.loginform.invalid)return;

    const newuser={
      email:this.f['email'].value,
      password:this.f['password'].value
    }

    this.apiservice.login(newuser).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/products']);
  },error=>{
      this.response=error.error.message;
    console.log(error.error.message);
  });

    
   
    this.loginform.reset();

    


    this.submitted=false;


  }

} 
