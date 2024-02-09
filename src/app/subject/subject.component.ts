import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { subject } from './subject-interface';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: subject[] = [];

  constructor(private _SubjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this._SubjectsService.getSubjects().subscribe((resp: subject[]) => {
      this.subjects = resp;
    })
  }
}
