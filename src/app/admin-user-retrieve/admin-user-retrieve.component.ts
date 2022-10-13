import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-user-retrieve',
  templateUrl: './admin-user-retrieve.component.html',
  styleUrls: ['./admin-user-retrieve.component.css']
})
export class AdminUserRetrieveComponent implements OnInit {
users:Array<User>=[];
  constructor(public us:UserService) { }

  ngOnInit(): void {
    this.findAllUser();
  }
  flag:boolean=false;
  uname:string="";
  address:string="";
  emailid:string="";
  mnumber:number=0;
  dob:string="";
  uid:number=0;
  uadhar:number=0;
  url:string="";
  gender:string="";

  findAllUser()
  {
    this.us.findAllUser().subscribe({
      next:(result:any)=>this.users=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")


    })
  }
     deleteUser(uid:number)
     {
      this.us.deleteUserById(uid).subscribe({
        next:(result:any)=>this.users=result,
        error:(error:any)=>console.log(error),
        complete:()=>{this.findAllUser();}
  
  
      })

     }

     updateUser(user:any)
     {
       this.flag=true;
       this.uname=user.uname;
       this.uid=user.uid;
       this.uadhar=user.uadhar;
       this.url=user.url;
       this.address=user.address;
       this.emailid=user.emailid;
       this.mnumber=user.mnumber;
       this.gender=user.gender;
       this.dob=user.dob;


     }
     updateDataFromDb()
     {
        let user = {uid:this.uid,uadhar:this.uadhar,url:this.url,uname:this.uname,address:this.address,emailid:this.emailid,mnumber:this.mnumber,gender:this.gender,dob:this.dob};
        this.us.updateUser(user).subscribe({
          next:(result:any)=>this.users=result,
          error:(error:any)=>console.log(error),
          complete:()=>{this.findAllUser();}
    
    
        })
        this.flag=false;

     }
}