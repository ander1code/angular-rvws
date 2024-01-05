import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListService } from './courses-list/courses-list.service';
import { CoursesFormsService } from './courses-forms/courses-forms.service';
import { CoursesFormsComponent } from './courses-forms/courses-forms.component';
import { CoursesComponent } from './courses.component';
import { MessageService } from './message.service';
import { CoursesRoutingModule } from './courses.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoursesRoutingModule,
  ],
  declarations: [
    CoursesComponent,
    CoursesFormsComponent,
    CoursesListComponent
  ],
  exports: [CoursesComponent],
  providers: [
    CoursesListService,
    CoursesFormsService,
    MessageService
  ]
})
export class CoursesModule { }
