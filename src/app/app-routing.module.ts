import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'; 
import { CoursesComponent } from './courses/courses.component';
import { AdminsComponent } from './admins/admins.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { GroupsComponent } from './groups/groups.component';
import { ViewCoursesComponent } from './courses/view-courses/view-courses.component';
import { GroupDetailsComponent } from './groups/group-details/group-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirect to MainComponent when URL is empty
  { path: 'main', component: MainComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'admins', component: AdminsComponent }, // Correct path for CoursesComponent
  { path: 'students', component: StudentsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'view_course', component: ViewCoursesComponent },
  { path: 'view_group', component: GroupDetailsComponent },

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
