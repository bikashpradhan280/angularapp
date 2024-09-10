import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
    // {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'', component:LoginComponent},
    {path:'home', component:DashboardComponent, title:'home'},
    {path:'aboutUs', component:AboutUsComponent, title:'about'},
    {path:'employee', component:EmployeeComponent, title:'employee', canActivate:[authGuard]},
    {path:'login', component:LoginComponent, title:'login'},
    {path:'template', component:TemplateDrivenFormComponent, title:'template'},
    {path:'**', component: PageNotFoundComponent}
];
