import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) { }

employeeName: string = 'Vasavi';
prodName = 'XBOX';
employeeList: any = [];
CountryList: any;

  ngOnInit(): void {
  }

  updateName() {

    console.log("calling updateName");
    console.log(this.employeeName);

    this.employeeName = "Vasavi Kambhampati";
    console.log(this.employeeName);
  }

  getCustomerByName(): void {
    console.log("i am calling");
    console.log(this.prodName);

    this.prodName = 'Play Station';
    console.log(this.prodName);
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
}
