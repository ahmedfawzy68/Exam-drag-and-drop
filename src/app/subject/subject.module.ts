import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HotToastModule } from '@ngneat/hot-toast';
import { BrowserModule } from '@angular/platform-browser';
import { TabsComponent } from './tabs/tabs.component';
import { ExamsComponent } from './exams/exams.component';
import { QuestionComponent } from './question/question.component';
import { SubjectComponent } from './subject.component';



@NgModule({
  declarations: [
    SubjectComponent,
    TabsComponent,
    ExamsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    SharedModule,
    DragDropModule,
    HotToastModule.forRoot()
  ],
  exports: [
    TabsComponent,
    ExamsComponent,
    QuestionComponent
  ]
})
export class SubjectModule { }
