import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerform:FormGroup;
  submitted:boolean=false;
  users:User[]=[];
  response:any;

  constructor(private formbulider:FormBuilder,private apiservice:ApiService){

    this.registerform=this.formbulider.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });

  }

  get f(){
    return this.registerform.controls;
   }
  


   onsubmit(){
    this.submitted = true;
    if(this.registerform.invalid)return;

    const newuser={
      username:this.f['username'].value,
      email:this.f['email'].value,
      password:this.f['password'].value
    }

    this.users.push(newuser);

    this.apiservice.senduser(newuser).subscribe(
      res => {
        console.log('Register Successful', res);
      }
    );
    console.log("Register Successfully",this.registerform.value);
    this.registerform.reset();
    this.submitted=false;
   
   }


}
