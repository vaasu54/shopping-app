import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './news/business/business.component';
import { SportComponent } from './news/sport/sport.component';
import { MovieComponent } from './news/movie/movie.component';
import { PoliticalComponent } from './news/political/political.component';
import { UniversityComponent } from './university/university.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    BusinessComponent,
    SportComponent,
    MovieComponent,
    PoliticalComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
