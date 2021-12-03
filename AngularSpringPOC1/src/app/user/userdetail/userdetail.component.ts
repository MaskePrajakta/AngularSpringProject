import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  userobj:User;
  constructor(private router:ActivatedRoute,private common:CommonService) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(param=>
      {
        this.common.getUser(parseInt(param.get('userid'))).subscribe(u=>
          {
            this.userobj=u;
          }
          )
      }
      )
  }

}
