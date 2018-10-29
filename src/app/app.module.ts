import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ForaComponent } from './fora/fora.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { CasListComponent } from './cas/cas-list/cas-list.component';
import { CasDetailsComponent } from './cas/cas-details/cas-details.component';
import { AboutComponent } from './about/about.component';
import { CasService } from './cas/cas.service';
import { ZakaziComponent } from './zakazi/zakazi.component';
import { CasComponent } from './cas/cas.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';



const routes: Routes = [
  {path: 'zakazi', component: ZakaziComponent},
  {path: ':cas', component: HomeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    NavComponent,
    ScheduleComponent,
    ForaComponent,
    LoginDialogComponent,
    CasListComponent,
    CasDetailsComponent,
    CasComponent,
    AboutComponent,
    ZakaziComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
