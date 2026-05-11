import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  productId: number | null = null;
  loading = false;
  categories: string[] = [];
  pageTitle = 'New Product';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.maxLength(500)]],
      category: ['', [Validators.required, Validators.maxLength(100)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      minStock: [0, [Validators.required, Validators.min(0)]]
    });

    this.loadCategories();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.pageTitle = 'Edit Product';
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.form.patchValue({
          name: product.name,
          description: product.description || '',
          category: product.category,
          quantity: product.quantity,
          price: product.price,
          minStock: product.minStock
        });
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('Product not found', 'Close', { duration: 3000 });
        this.router.navigate(['/products']);
      }
    });
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (categories) => this.categories = categories
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const data = this.form.value;

    if (this.isEditMode && this.productId) {
      this.productService.updateProduct(this.productId, data).subscribe({
        next: () => {
          this.snackBar.open('Product updated successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/products']);
        },
        error: () => {
          this.snackBar.open('Failed to update product', 'Close', { duration: 3000 });
          this.loading = false;
        }
      });
    } else {
      this.productService.createProduct(data).subscribe({
        next: () => {
          this.snackBar.open('Product created successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/products']);
        },
        error: () => {
          this.snackBar.open('Failed to create product', 'Close', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }
}
