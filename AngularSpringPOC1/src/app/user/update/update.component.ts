import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm:FormGroup;

  constructor(private _fb:FormBuilder,private location:Location,private  common:CommonService) { }

  ngOnInit(): void {
    this.updateForm=this._fb.group({
      userid:[],
    name: [''],
    surname: [''],
    city: [''],
    pincode: [''],
    dob: [''],
    joiningdate: [''],
     username: [''],
    password: [''],
    })

    this.editUser();
  }
  editUser()
  {
   let userobj:any= this.location.getState();
   console.log(userobj);
   console.log(userobj.userid);
   if(userobj.userid!=null)
   {
this.updateForm.get('userid').setValue(userobj.userid);
this.updateForm.get('name').setValue(userobj.name);
this.updateForm.get('surname').setValue(userobj.surname);
this.updateForm.get('city').setValue(userobj.city);
this.updateForm.get('pincode').setValue(userobj.pincode);
this.updateForm.get('dob').setValue(userobj.dob);
this.updateForm.get('joiningdate').setValue(userobj.joiningdate);
this.updateForm.get('username').setValue(userobj.username);
this.updateForm.get('password').setValue(userobj.password);
   }

   
  }
  onSubmit()
  {
this.common.updateUser(this.updateForm.value).subscribe();
  }
  

}
