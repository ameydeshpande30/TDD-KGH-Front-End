import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getTypeNameForDebugging } from '@angular/core/src/change_detection/differs/iterable_differs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  constructor() { }
 

  ngOnInit() {
    
  }

}
