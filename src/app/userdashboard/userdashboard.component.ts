import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  userRef = new FormGroup({
    uname:new FormControl(),
    uadhar:new FormControl(),
    url:new FormControl(),
    address:new FormControl(),
    mnumber:new FormControl(),
    gender:new FormControl(),
    dob:new FormControl(),
    uid:new FormControl(),
    emailid:new FormControl(),
    })
    storeMsg : string=""

  user:String="";

  constructor(public router:Router , public us:UserService) { }
 
  ngOnInit(): void {

    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null)
    {
        this.user=obj;
    }
  }
  storeUser()
  {
    let user = this.userRef.value;
    this.us.storeUser(user).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")

    })
    this.userRef.reset();
  }
 logout()
 {
  sessionStorage.removeItem("userDetails");
  this.router.navigate(["login"])
 }

}