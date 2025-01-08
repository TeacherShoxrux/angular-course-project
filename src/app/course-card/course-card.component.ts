import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
courseViewed() {
  this.courseSelected.emit(this.course);
}
  @Input()
  course:Course;
  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();
  constructor() { 

  }

  ngOnInit(): void {
   
  }

}
