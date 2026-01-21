import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  userForm!:any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
      this.userForm= this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        });
        this.userForm.valueChanges.subscribe((value:{ name: string; email: string }) => {
            console.log('Form value changed:', value);
          });
        }


  submit() {
    console.log('Form Submitted:', this.userForm.value);
  }
}
