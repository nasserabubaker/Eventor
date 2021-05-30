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
    return this.http.put("http://localhost:3000/API/events/editevent",obj)
  }
  getEventsDetails(id: number) {
    return this.http.get("http://localhost:3000/API/events/get_event/" + id);
  }
  addEvent(obj:any){
    return this.http.post("http://localhost:3000/API/events/addevent", obj)
  }
  DeleteEvent(obj:any){
    return this.http.delete("http://localhost:3000/API/events/deleteevent/"+ obj.id)
  }
  eventSearch(obj: any) {
    return this.http.get("http://localhost:3000/API/events/search/"+ obj.word)
  }

}

