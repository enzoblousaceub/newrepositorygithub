import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { DashboardStats } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  stats = signal<DashboardStats | null>(null);
  loading = signal<boolean>(true);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    console.log('DashboardComponent: loadStats called');
    this.loading.set(true);
    this.productService.getStats().subscribe({
      next: (stats) => {
        console.log('DashboardComponent: stats received successfully', stats);
        this.stats.set(stats);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('DashboardComponent: error receiving stats', err);
        this.loading.set(false);
      }
    });
  }
}
