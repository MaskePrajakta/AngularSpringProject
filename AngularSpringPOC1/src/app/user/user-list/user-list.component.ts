import { Location } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userlist:User[];
  constructor(private common:CommonService,private router:Router,private location:Location) { }

  ngOnInit(): void {
    this.common.getuserlist().subscribe(list=>
      {
this.userlist=list;
      })
    }
  getback()
  {
    this.location.back();
  }
  deleteuser(userid:number)
  {
    this.common.deleteuser(userid).subscribe();
  }
  
}
