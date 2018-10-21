import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'cv',      component: CvComponent },
  { path: 'contact',      component: ContactComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CvComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
