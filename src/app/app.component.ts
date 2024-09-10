import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { dataType } from './usetType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, StudentComponent, CommonModule, FormsModule, WelcomePipe, HttpClientModule, RouterLink, RouterLinkActive, TemplateDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  // providers:[MessageService]
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  age: any = 199;
  employees: any[] = [
    // { id: 1, name: 'Alice' },
    // { id: 2, name: 'Bob' },
    // { id: 3, name: 'Charlie' },
    // { id: 4, name: 'David' },
    // { id: 5, name: 'Eve' }
  ]
 
  data: dataType = {
    name: 'Bikash',
    id: 10,
    indian: true,
    address: 'Ahmd'
  }
 
  constructor(private _messageService :MessageService, private _cookieSrvice:CookieService) {
    this._messageService.testValue=4;
    // this._cookieSrvice.set('testCookie','success')
  }

}