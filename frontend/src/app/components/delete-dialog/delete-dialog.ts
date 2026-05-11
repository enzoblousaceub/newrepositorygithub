import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="delete-dialog">
      <div class="dialog-icon">
        <mat-icon>warning</mat-icon>
      </div>
      <h2 mat-dialog-title>Delete Product</h2>
      <mat-dialog-content>
        <p>Are you sure you want to delete <strong>"{{ data.name }}"</strong>?</p>
        <p class="warning-text">This action cannot be undone.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-stroked-button (click)="onCancel()" id="btn-dialog-cancel">Cancel</button>
        <button mat-raised-button color="warn" (click)="onConfirm()" id="btn-dialog-confirm">
          <mat-icon>delete</mat-icon>
          Delete
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .delete-dialog {
      padding: 8px;
    }
    .dialog-icon {
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
      mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        color: #f87171;
      }
    }
    h2 {
      text-align: center;
      margin: 0 0 8px 0;
    }
    mat-dialog-content p {
      text-align: center;
      margin: 4px 0;
    }
    .warning-text {
      font-size: 0.85rem;
      opacity: 0.6;
    }
    mat-dialog-actions button {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  `]
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
