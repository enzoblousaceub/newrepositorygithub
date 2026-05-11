import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ProductListComponent } from './pages/product-list/product-list';
import { ProductFormComponent } from './pages/product-form/product-form';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: '**', redirectTo: '' }
];
