import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bil',
  templateUrl: './bil.component.html',
  styleUrls: ['./bil.component.css']
})
export class BilComponent implements OnInit {
  public id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
  }

}
