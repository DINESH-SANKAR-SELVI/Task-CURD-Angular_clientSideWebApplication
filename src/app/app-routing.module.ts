import { ApplicationConfig, Component, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { TableInfoComponent } from './table-info/table-info.component';
import { ViewModelComponent } from './view-model/view-model.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path :'' , redirectTo: 'LogIn', pathMatch: 'full' },
  {path :'LogIn',title:"Start To Use" ,component: LogInPageComponent},
  {path :'Register' ,title: "Join With Us",component: RegisterPageComponent},
  {path :'DashBoard' ,title: "Welcome Page" ,component: DashboardComponent ,data: {animation:'HomePage'}, 
  children:[
    { path:'', redirectTo: 'ViewEmployee' ,pathMatch:'full' ,data: { animation: 'ViewEmployeePage' }},
    { path: 'ViewEmployee' ,title: "Employees" ,component:ViewEmployeeComponent ,data: { animation: 'ViewEmployeePage' }},
    {path:'ViewEmployee/:id' ,component: ViewModelComponent, data: { animation: 'ViewModelPage' }},
    {path:'TableInfo' ,title: "TableOfContent" ,component: TableInfoComponent ,data: { animation: 'TableInfoPage' }},
    {path: 'ViewEmployee/createData/:id' ,title: "make changes" ,component: CreateUserComponent ,data: { animation: 'CreateUserPage' }}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};