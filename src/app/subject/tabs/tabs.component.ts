import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabSelectionService } from 'src/app/tab-selection.service';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private _TabSelectionService: TabSelectionService) { }

  ngOnInit(): void { }

  send(event: MatTabChangeEvent) {
    this._TabSelectionService.selectedTabLabelSubject.next(event.tab.textLabel);
  }

}
