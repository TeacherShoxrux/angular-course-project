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

    js_course:Course=COURSES[0]
    ng_course:Course=COURSES[2]
    rc_course:Course=COURSES[1]
}
