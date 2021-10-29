import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome(){
  console.log("inside home");
  this.router.navigate(['home']);

}
navigateToNews(){
  console.log("inside news");
  this.router.navigate(['news']);

}
navigateToContact(){
  console.log("inside contact");
  this.router.navigate(['contact']);

}
navigateToAbout(){
  console.log("inside about");
  this.router.navigate(['about']);

}
}
