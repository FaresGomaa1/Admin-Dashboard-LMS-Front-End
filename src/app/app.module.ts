import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminsComponent } from './admins/admins.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { GroupsComponent } from './groups/groups.component';
import { ViewCoursesComponent } from './courses/view-courses/view-courses.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    MainComponent,
    FooterComponent,
    CoursesComponent,
    AdminsComponent,
    StudentsComponent,
    InstructorsComponent,
    GroupsComponent,
    ViewCoursesComponent,
    GroupDetailsComponent,

 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule, // make sure FullCalendarModule is imported
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
