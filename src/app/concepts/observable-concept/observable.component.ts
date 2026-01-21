import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './observable.component.html',
  styleUrl:'./observable.component.css'
})
export class ObservableComponent {

  numbers: number[] = [];

  startObservable() {
    const numberObservable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    numberObservable.subscribe({
      next: (value) => this.numbers.push(value),
      complete: () => console.log('Observable completed')
    });
  }
}
