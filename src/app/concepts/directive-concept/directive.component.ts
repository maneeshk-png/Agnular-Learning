import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './directive.component.html',
  styleUrl:'./directive.component.css'
})
export class DirectivesComponent {
  showMessage = true;

  skills = ['Angular', 'TypeScript', 'RxJS'];

  isActive = true;
}
