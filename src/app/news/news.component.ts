import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(routerPath : string){
    console.log("inside naviagte function",routerPath);
    // let path = `news${routerPath}`;
    this.router.navigate(['news/'+routerPath]);

  }
 
}
