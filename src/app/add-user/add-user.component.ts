import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
  constructor(public us:UserService) { }

  ngOnInit(): void {
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

}
