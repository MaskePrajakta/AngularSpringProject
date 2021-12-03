import { Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

export const contentroutes: Routes = [
    {
        path: '', redirectTo:'dashboard', pathMatch:'full'
    },
    {
        path:'dashboard' ,component:DashboardComponent
      },
      {
        path:'contact-us' ,component:ContactUsComponent
      },
      {
        path:'about-us' ,component:AboutUsComponent
      },
      {
        path:'company', loadChildren:()=>import('src/app/company/company.module').then(m=>m.CompanyModule)
      },
      {
        path:'user', loadChildren:()=>import('src/app/user/user.module').then(m=>m.UserModule)
      }
    
];