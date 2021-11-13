import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { UniversityModel } from './university.model';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  
  countryInput : string;
  selectedCountry :string;
  countrydropdown :string []=['United States','United Kingdom','Nepal','India','Pakistan'];
  unversityList : UniversityModel[] ;

  constructor(private appService: AppService) { 
    this.appService.getAllCountrys().subscribe(countryList => {
      console.log(countryList);
      // this.countrydropdown = countryList
    })

  }


  ngOnInit(): void {
  }

  getUniversities(){
    console.log("inside university component");
    this.appService.getUniversityListAPI(this.selectedCountry).subscribe((unversityListResponse : UniversityModel[] ) => {
      console.log(unversityListResponse);
      this.unversityList=unversityListResponse;
    })


  }
  onChangeMake(event) {
    console.log(event);
    console.log(this.selectedCountry);
    this.getUniversities();
  }
}
