import { HomepageComponent } from './homepage/homepage.component';
import { StatementComponent } from './statement/statement.component';
import { BilComponent } from './bil/bil.component';
import { EmpComponent } from './emp/emp.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { RolesComponent } from './roles/roles.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: 
  [AuthGuard] , children : [
    { path: '', component: DashboardComponent },
  { path: 'room', component: RoomComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'bill', component: BilComponent },
  { path: 'statement', component: StatementComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'roles', component: RolesComponent },
  ] },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
