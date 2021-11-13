import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './news/business/business.component';
import { MovieComponent } from './news/movie/movie.component';
import { NewsComponent } from './news/news.component';
import { PoliticalComponent } from './news/political/political.component';
import { SportComponent } from './news/sport/sport.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  {
    path: 'news', component: NewsComponent, children: [
      { path: '', redirectTo: 'business', pathMatch: 'full' },
      { path: 'business', component: BusinessComponent },
      { path: 'sport', component: SportComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'political', component: PoliticalComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
