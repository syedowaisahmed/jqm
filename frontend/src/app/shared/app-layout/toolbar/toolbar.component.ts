import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class AppToolbarComponent {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  isMenuOpened = false;

  constructor(private router: Router) {}

  onMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
    this.menuClick.emit(this.isMenuOpened);
  }

  login() {
    this.router.navigate(['/login']);
  }

  donate() {

  }
}
