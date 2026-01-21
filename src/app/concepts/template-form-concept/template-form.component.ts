import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {

  user = {
    name: '',
    email: ''
  };

  submitForm(form: any) {
    console.log('Form value:', form.value);
  }
}
