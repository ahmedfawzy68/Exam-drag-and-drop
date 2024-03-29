import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { SubjectModule } from './subject/subject.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    SharedModule,
    SubjectModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
