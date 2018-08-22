import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { DataApiService } from './data-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'user/:id',
        component: ProfileComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
