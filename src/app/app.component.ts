import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces:true,
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angularapp';

  // @HostListener('click',['$event'])
  // show(){
  //   alert('papu')
  // }
}

export class Bikash{
  constructor(){
    console.log('Bikash')
  }
}
