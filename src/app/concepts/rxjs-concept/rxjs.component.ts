import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, from } from 'rxjs';
import { map, filter, tap, switchMap, delay } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  results: string[] = [];

  runSwitchMapDemo() {
    this.results = [];

    from([1, 2, 3, 4])
      .pipe(
        tap(val => this.results.push(`Original: ${val}`)),

        // 1️⃣ filter
        filter(val => val % 2 === 0),

        tap(val => this.results.push(`After filter: ${val}`)),

        // 2️⃣ map
        map(val => val * 10),

        tap(val => this.results.push(`After map: ${val}`)),

        // 3️⃣ switchMap
        switchMap(val =>
          of(`Response for ${val}`).pipe(delay(1000))
        )
      )
      .subscribe(response => {
        this.results.push(response);
      });
  }
}
