import { Component, EventEmitter } from '@angular/core';
import { Employee } from './employee';
import { Book } from './book';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  // outputs:['childEvent']
})
export class EmployeeComponent {

  // childEvent: any = new EventEmitter;
  // sendData(val: any) {
  //   this.childEvent.emit(val)
  // }

  emp: Employee = {
    'name': 'Bikash',
    'email': 'bikash@gmail.com',
    'contact': 8114995498
  }

  books: Book[] = [
    { 'title': 'C', 'author': 'Bikash1', 'pages': 32, 'price': 230 },
    { 'title': 'D', 'author': 'Bikash2', 'pages': 330, 'price': 202 },
    { 'title': 'E', 'author': 'Bikash3', 'pages': 320, 'price': 230 }
  ]
}
