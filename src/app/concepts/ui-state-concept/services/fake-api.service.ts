import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FakeApiService {
  fetchData() {
    return of({
      message: 'Success',
      time: new Date().toLocaleTimeString()
    }).pipe(delay(1500));
  }
}
