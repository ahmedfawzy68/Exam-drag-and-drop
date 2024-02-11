import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

interface questionList {
  name: string;
}

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  drafts: any[] = [];
  dragList: questionList[] = [
    { name: "Multiple choice" },
    { name: "Single choice" },
    { name: "Text" }
  ]

  dropList: questionList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<questionList[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }


  receiveData(data: any) {
    this.drafts.push(data);
  }

  deleteDraft(i: number) {
    this.drafts.splice(i, 1);
  }

}
