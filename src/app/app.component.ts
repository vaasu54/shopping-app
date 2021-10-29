import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService) {


  }
  appName: string = 'shopping app';
  employeeList: any = [];
  CountryList: any;
  prodName = 'XBOX';
  productNum: number = 10;
  appAvailable: boolean = false;
  employeeName: string = 'Vasavi';

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

  getCustomerByName(): void {
    console.log("i am calling");
    console.log(this.prodName);

    this.prodName = 'Play Station';
    console.log(this.prodName);
  }
  getCustomerById(): any {

  }
  updateName() {

    console.log("calling updateName");
    console.log(this.employeeName);

    this.employeeName = "Vasavi Kambhampati";
    console.log(this.employeeName);
  }

  getEmployeeList() {
    
    this.appService.getEmployeeListfromBackend().subscribe((responseData: any) => {

      //this.employeeList = responseData;
      responseData.forEach((employee: any) => {
        console.log(employee);
        if(employee.id <= 25 ) {
          this.employeeList.push({...employee, status: 'Junoir'})
        } else {
          this.employeeList.push({...employee, status: 'Senior'})
        }
      });
    })

  }

  getCountryList() {
    console.log("country list  function calling ");

    this.appService.getCountryListAPI().subscribe((countrydata) => {

      this.CountryList = countrydata;
      console.log(this.CountryList);

    })




  }

  // getAllStudents() {

  // }

  // (studentId) => {

  // } 

}
