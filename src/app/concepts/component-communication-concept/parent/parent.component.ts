import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent,RouterLink],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentMessage = 'Hello Child! This is Parent';
  childResponse = '';

  receiveFromChild(message: string) {
    this.childResponse = message;
  }
}
