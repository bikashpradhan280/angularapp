import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  testValue:number=2;
  constructor() { }

  getMessage(value:any){
    return value+ 'Bikash 811'
  }
}
