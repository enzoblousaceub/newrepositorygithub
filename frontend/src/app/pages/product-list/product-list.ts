import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule, FormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatChipsModule, MatTooltipModule, MatSnackBarModule,
    MatDialogModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'quantity', 'price', 'status', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  categories: string[] = [];
  searchQuery = '';
  selectedCategory = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts(): void {
    this.productService.getProducts(this.searchQuery, this.selectedCategory).subscribe({
      next: (products) => {
        this.dataSource.data = products;
      },
      error: () => {
        this.snackBar.open('Failed to load products', 'Close', { duration: 3000 });
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => this.categories = categories
    });
  }

  onSearch(): void {
    this.loadProducts();
  }

  onCategoryChange(): void {
    this.loadProducts();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.loadProducts();
  }

  getStockStatus(product: Product): string {
    if (product.quantity === 0) return 'out-of-stock';
    if (product.quantity <= product.minStock) return 'low-stock';
    return 'in-stock';
  }

  getStockLabel(product: Product): string {
    if (product.quantity === 0) return 'Out of Stock';
    if (product.quantity <= product.minStock) return 'Low Stock';
    return 'In Stock';
  }

  confirmDelete(product: Product): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: { name: product.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(product.id).subscribe({
          next: () => {
            this.snackBar.open(`"${product.name}" deleted successfully`, 'Close', { duration: 3000 });
            this.loadProducts();
          },
          error: () => {
            this.snackBar.open('Failed to delete product', 'Close', { duration: 3000 });
          }
        });
      }
    });
  }
}
