import { BilComponent } from './bil/bil.component';
import { EmpComponent } from './emp/emp.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';
import { bindCallback } from 'rxjs';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'room', component: RoomComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'bill', component: BilComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
