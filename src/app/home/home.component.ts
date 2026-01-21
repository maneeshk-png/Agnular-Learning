import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports:[CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css'
})
export class HomeComponent {
    showCore = false;
  showReactive = false;
  showForms = false;
  showApp = false;
  showUi = false;
}
