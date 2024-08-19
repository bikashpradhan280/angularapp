import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { dataType } from './usetType';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  age: any = 199;
  employees: any[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
  ]

  constructor(){
    
  }

  checkInterface(data:dataType){
    console.log(data)
  }

  getData() {
    const data:dataType = {
      name: 'Bikash',
      id: 10,
      indian: true,
      address: 'Ahmd'
    }

    return data;
  }
}