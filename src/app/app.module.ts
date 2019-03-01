import { AuthService } from './Auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from '../app/Auth/token.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { RoomComponent } from './room/room.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { EmpComponent } from './emp/emp.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';
import { BilComponent } from './bil/bil.component';
import { StatementComponent } from './statement/statement.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { RolesComponent } from './roles/roles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './Auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    DashboardComponent,
    RoomComponent,
    CustomerComponent,
    EmpComponent,
    InventoryComponent,
    BilComponent,
    StatementComponent,
    CategoryComponent,
    DepartmentComponent,
    RolesComponent,
    HomepageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  AuthService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
