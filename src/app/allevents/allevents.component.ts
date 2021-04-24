import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  events: any = [];
  id = 1;

  constructor(private eventserves:EventService) { }
  ngOnInit(): void {
    let obj = {
      id: this.id
    }
    this.eventserves.getHostedEvents(obj).subscribe(x => this.events = x);
  }

}
