import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './services/event.service';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlleventsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
