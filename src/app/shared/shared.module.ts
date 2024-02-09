import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
