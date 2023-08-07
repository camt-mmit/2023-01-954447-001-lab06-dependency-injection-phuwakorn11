import { Routes } from '@angular/router';
import { ExampleInputComponent } from './router/example-input/example-input.component';

export const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: ExampleInputComponent },
];
