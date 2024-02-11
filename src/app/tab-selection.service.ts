import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabSelectionService {
  selectedTabLabelSubject = new BehaviorSubject<string>('Subjects');

  constructor() { }
}
