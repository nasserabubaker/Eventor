import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  getHostedEvents(id:number) {
    return this.http.get("http://localhost:3000/API/events/Show_all/" +id);
  }
  
  EditEvent(obj:any){
    return this.http.put("http://localhost:3000/API/events/editevent",obj.id)
  }
  getEventsDetails(id: number) {
    return this.http.get("http://localhost:3000/API/events/get_event/" + id);
  }

}
