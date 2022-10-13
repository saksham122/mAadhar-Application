import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
  constructor(public us:UserService) { }

  ngOnInit(): void {
    this.findAllUser();
  }
  findAllUser()
  {
    this.us.findAllUser().subscribe({
      next:(result:any)=>this.users=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")


    })
  }
uadhar:number=0;
users:Array<User>=[];
}
