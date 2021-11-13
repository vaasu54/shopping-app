import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeListfromBackend(){

    console.log("i am inside");
    //connection to the backend code 
    //https://jsonplaceholder.typicode.com/posts
    let res=this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  return res;
  }

  getCountryListAPI(){
    console.log("inside countryAPI");

    let result= this.httpClient.get("https://api.printful.com/countries");

    return result;


  }
  getUniversityListAPI(country : string ){
    console.log("inside universityAPI");
    let universities =this.httpClient.get("http://universities.hipolabs.com/search?country="+country);
    //console.log(universities);
    return universities;
  }


  getAllCountrys() {
    console.log('Test this');
    return this.httpClient.get('https://api.first.org/data/v1/countries');
  }
}
//get=read
//put=update
//post=create
//delete= delete
