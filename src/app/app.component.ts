import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {


  }
  appName: string = 'shopping app';
  
  
  prodName = 'XBOX';
  productNum: number = 10;
  appAvailable: boolean = false;
  

  customerIds: number[] = [10, 20, 30];
  //customerIds[1]-->20
  customerName: string[] = ['test', 'test1', 'test2'];
  //customerName[2]-->test2
  customer: any = {
    id: 10,
    name: 'firstCustomer'
  }
  //customer.name-->firstCustomer

  customersList: any = [
    { id: 20, name: '1st Customer' },
    { id: 30, name: '2nd Customer' }
  ]
  //customersList[1].name -->2nd Customer

  
  getCustomerById(): any {

  }
 

  

  

  // getAllStudents() {

  // }

  // (studentId) => {

  // } 

}
