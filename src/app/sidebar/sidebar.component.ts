import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  toggle: string = '250px';
  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkIfMobile();
  }


  toggleWidth() {
    this.toggle = this.toggle === '250px' ? '0' : '250px';
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth < 900;
    this.toggle = this.isMobile ? '0' : '250px';
  }

}
