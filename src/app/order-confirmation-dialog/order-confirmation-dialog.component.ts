import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-order-confirmation-dialog',
  templateUrl: './order-confirmation-dialog.component.html',
  styleUrls: ['./order-confirmation-dialog.component.css']
})
export class OrderConfirmationDialogComponent {
 /*  constructor(@Inject(MAT_DIALOG_DATA) public data: Medicine) { } */

 constructor(
  public dialogRef: MatDialogRef<OrderConfirmationDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) { }

ngOnInit(): void {
}

confirmOrder(): void {

  this.dialogRef.close(this.data);
}

cancelOrder(): void {
  this.dialogRef.close();
}
}
