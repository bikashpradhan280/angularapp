import { Component, EventEmitter } from '@angular/core';
import { demo, Employee, item } from './employee';
import { Book } from './book';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { HighLightDirective } from '../high-light.directive';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, HighLightDirective],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  // outputs:['childEvent']
  // providers:[MessageService]

})
export class EmployeeComponent {

  // childEvent: any = new EventEmitter;
  // sendData(val: any) {
  //   this.childEvent.emit(val)
  // }
  constructor(private _messageService :MessageService) {
    // console.log(this._messageService.testValue)
  }

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

  items: item = {
    'name': 'bikash',
    'varint': {
      'name': 'nii'
    }
  }

  student: demo = {
    name: 'Bikash',
    numner: 2
  }

  students: demo[] = [
    { name: 'b', numner: 2 },
    { name: 'c', numner: 3 }
  ]

  grtColor(data: any) {
    switch (data) {
      case 'C':
        return 'red'
      case 'D':
        return 'pink'
      default:
        return 'yellow'

    }
    return null
  }
}
