import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';
import { RouteThreeComponent } from './components/route-three/route-three.component';
import { HomeComponent } from './components/home/home.component';
import ComponentAux from './components/aux.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    HomeComponent,
    ComponentAux
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
