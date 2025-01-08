import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    onCardSelected(course:Course){ 
console.log('Card Clicked'+course.description);
}
    courses = COURSES;
    course = COURSES[0];
    startDate = new Date(2000,0,1);
}
