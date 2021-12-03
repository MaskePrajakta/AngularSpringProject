import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {
    path:"",component:UserComponent,children:
    [
      {
        path:"user-list",component:UserListComponent,children:
        [
          {
            path:"update",component:UpdateComponent
          },
          {
            path:"userdetail/:userid",component:UserdetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
