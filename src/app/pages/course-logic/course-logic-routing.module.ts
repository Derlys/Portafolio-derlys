import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLogicComponent } from './course-logic.component';

const routes: Routes = [{ path: '', component: CourseLogicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseLogicRoutingModule { }
