import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlleventsComponent } from './allevents/allevents.component';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "showEvents", component: AlleventsComponent },
  {path:"login",component:LoginComponent}
  
];  
import { ScheduleComponent } from './schedule/schedule.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "showEvents", component: AlleventsComponent },{path: "scheduleEvent", component: ScheduleComponent},
  {path:"",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
