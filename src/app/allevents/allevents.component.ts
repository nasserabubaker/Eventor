import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit  {
  events: any = [];
  id = 1;

  constructor(private eventserves:EventService) { }
  ngOnInit(){
    this.eventserves.getHostedEvents(this.id).subscribe(x => this.events = x);
  }
  deleteEvent(date: Date) {
    let x = new Date()
    console.log(x>date)

  }
}
