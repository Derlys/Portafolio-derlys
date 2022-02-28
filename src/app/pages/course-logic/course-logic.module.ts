import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseLogicRoutingModule } from './course-logic-routing.module';
import { CourseLogicComponent } from './course-logic.component';


@NgModule({
  declarations: [
    CourseLogicComponent
  ],
  imports: [
    CommonModule,
    CourseLogicRoutingModule
  ]
})
export class CourseLogicModule { }
