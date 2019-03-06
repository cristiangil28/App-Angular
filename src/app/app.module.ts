import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ClienteService} from './cliente/cliente.service';
import {Routes, RouterModule} from '@angular/router';

const routes:Routes=[
  {path: '',redirectTo:'/cliente',pathMatch:'full'},
  {path:'cliente',component:ClienteComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
