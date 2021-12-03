import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private _fb:FormBuilder,private common:CommonService) { }

  ngOnInit(): void {
    this.registerForm=this._fb.group(
      {
        userid:[],
        name:[''],
        surname:[''],
        city:[''],
        pincode:[''],
        dob:[''],
        joiningdate:[''],
         username:[''],
        password:['']


      }
    )
  }
  onSubmit()
  {
    if(this.registerForm.valid)
    {
this.common.UserSave(this.registerForm.value).subscribe();
  }
  }

}
