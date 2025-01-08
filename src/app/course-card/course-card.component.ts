import { Component,NgModule, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
cardClass(): any {
 if(this.course.category == 'BEGINNER' )return{ 'beginner': this.course.category == 'BEGINNER' };
}
cardStyles(): any {
return {'text-decoration':'underline'}; 
}
courseViewed() {
  this.courseSelected.emit(this.course);
}
  @Input() 
  course:Course;

  @Input({required:true})
  index:number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  constructor() { 

  }

  ngOnInit(): void {
   
  }

}
