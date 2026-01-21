import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService } from '../services/fake-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-state',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './ui-state.component.html',
  styleUrls: ['./ui-state.component.css']
})
export class UiStateComponent {

  isLoading = false;
  data: any = null;
  error: string | null = null;

  constructor(private api: FakeApiService,private cdr: ChangeDetectorRef) {}

  loadData() {
    console.log('CLICKED');
    this.isLoading = true;
  
    this.api.fetchData().subscribe({
      next: (res) => {
        console.log('SUCCESS');
        this.data = res;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('ERROR');
        this.isLoading = false;
        this.error = err.message;
      }
    });
  }
  
}
