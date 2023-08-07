import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TwoWaysComponent } from './two-ways/two-ways.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TwoWaysComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-ng2';

  products = [
    { code: 'PD001', name: 'Product 01' },
    { code: 'PD002', name: 'Product 02' },
    { code: 'PD003', name: 'Product 03' },
  ];

  externalMessage = 'Cindy';
}
