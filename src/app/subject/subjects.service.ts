import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from './subject-interface';


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private _HttpClient: HttpClient) { }

  getSubjects(): Observable<subject[]> {
    return this._HttpClient.get<subject[]>('assets/json/subject.json');
  }
}
