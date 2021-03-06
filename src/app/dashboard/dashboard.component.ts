import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

    
                  
  }
  
  
  public lineChartData1:Array<any> = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Bookings'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Inquiries'}
  ];
  public lineChartData2:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Bookings'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Inquiries'}
  ];
  public lineChartData:Array<any> = this.lineChartData2;
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors1:Array<any> = [
   
    { // dark grey
      backgroundColor: 'rgba(235,21,60,0.2)',
      borderColor: 'rgba(210,28,61,1)',
      pointBackgroundColor: 'rgba(189,26,55,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  
  ];
  public lineChartColors2:Array<any> = [
    { // grey
      backgroundColor: 'rgba(6,43,231,0.2)',
      borderColor: 'rgba(26,56,211,1)',
      pointBackgroundColor: 'rgba(36,62,193,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  
  
  ];
  
  public lineChartColors = this.lineChartColors1;
  flag = 1;
  onKeyUp(v){
   
    if(v==0){
     
      this.lineChartData = this.lineChartData1;
      
    
    }
    else{
      
      this.lineChartData = this.lineChartData2;
      
      
    }
  }
 
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
