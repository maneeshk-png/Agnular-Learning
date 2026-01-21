import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Parent → Child
  @Input() messageFromParent!: string;

  // Child → Parent
  @Output() sendToParent = new EventEmitter<string>();

  notifyParent() {
    this.sendToParent.emit('Hello Parent! This came from Child');
  }
}
