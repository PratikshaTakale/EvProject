import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { OrderConfirmationDialogComponent } from '../order-confirmation-dialog/order-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  selectedMedicines: any;
  snackBar: any;
  cartItems: any[] = [];

  constructor(private route: ActivatedRoute,private dialog: MatDialog,private router:Router) { }

 /*  ngOnInit(): void {
    this.selectedMedicine = history.state.medicine;
  } */

    ngOnInit(): void {
      this.selectedMedicines = history.state.medicines || [];
    }

   

      /* placeOrder(medicine: Medicine): void {
        const dialogRef = this.dialog.open(OrderConfirmationDialogComponent, {
          data: medicine
        });
    
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result) {
            // Example: Implement order placement logic here
            this.snackBar.open('Order placed successfully!', 'Close', {
              duration: 3000,
            });
            console.log('Placing order for:', medicine);
          }
        });
      } */


        placeOrder(medicine: any): void {
          const dialogRef = this.dialog.open(OrderConfirmationDialogComponent, {
            data: medicine
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              console.log('Placing order for:', result);
              // Add the selected medicine to cartItems or selectedMedicines array
              this.cartItems.push(result); // Adjust as per your data structure
      
              // Optionally, navigate to the checkout page
              
            }
          });
        }
}
