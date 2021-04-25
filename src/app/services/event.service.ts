import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  getHostedEvents(obj:any) {
    return this.http.get("http://localhost:3000/API/events/Show_all/" + obj.id);
  }
}
export class ScheduleService {
  constructor(private http: HttpClient) { }
  addEvent(obj:any){
    return this.http.post("http://localhost:3000/API/events/addevent", obj)
  }
}
