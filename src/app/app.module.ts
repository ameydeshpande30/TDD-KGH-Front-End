import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
<<<<<<< HEAD
import { RoomComponent } from './room/room.component';
import {DataTableModule} from "angular-6-datatable";
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> e234962f7494fcef71473b073e29d14c5911220d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    RoomComponent,
    
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    DataTableModule,
=======
    HttpClientModule,
>>>>>>> e234962f7494fcef71473b073e29d14c5911220d
    ChartsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }