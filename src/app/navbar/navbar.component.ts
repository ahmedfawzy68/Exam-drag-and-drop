import { Component, OnInit } from '@angular/core';
import { TabSelectionService } from '../tab-selection.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab: string = ''

  constructor(private _TabSelectionService: TabSelectionService) { }

  ngOnInit(): void {
    this._TabSelectionService.selectedTabLabelSubject.subscribe(label => {
      this.tab = label;
    })
  }

}
