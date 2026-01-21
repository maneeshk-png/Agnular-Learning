import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-biding-concept',
  imports: [FormsModule,RouterLink],
  templateUrl: './data-biding-concept.html',
  styleUrl: './data-biding-concept.css',
})
export class DataBidingConcept {
  username = 'Maneesh';
  isDisabled = false;

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }
}
