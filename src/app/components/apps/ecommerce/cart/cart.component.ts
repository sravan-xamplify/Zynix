import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import Swal from 'sweetalert2';

const DATA = [
  {
    id: 1,
    name: 'Loveseat Compact sofa',
    image: './assets/images/ecommerce/png/1.png',
    remainingItems: 23,
    discount: '30% Shipping Discount',
    price: 459,
    color: 'Black',
    BgColor:'success',
    colorOptions: ['Brown', 'Gray', 'Green'],
    quantity: 2,
    deliveryTime: '2 Days',
    deliveryBg:'primary'
  },
  {
    id: 2,
    name: 'Sony Alpha a7 Camera',
    image: './assets/images/ecommerce/png/14.png',
    remainingItems: 5,
    discount: '65% Merchant Discount',
    price: 129,
    color: 'Orange',
    BgColor:'primary',
    colorOptions: ['Brown', 'Gray', 'Green'],
    quantity: 2,
    deliveryTime: '5 Days',
    deliveryBg:'secondary'
  },
  {
    id: 3,
    name: 'Classic oriental fragrance Perfume',
    image: './assets/images/ecommerce/png/33.png',
    remainingItems: 12,
    discount: '12% Merchant Discount',
    price: 249,
    color: 'Pink',
    BgColor:'primary',
    colorOptions: ['Brown', 'Gray', 'Green'],
    quantity: 2,
    deliveryTime: '3 Days',
    deliveryBg:'success'
  },
  {
    id: 4,
    name: 'Babypink Ladies handbag',
    image: './assets/images/ecommerce/png/31.png',
    remainingItems: 9,
    discount: '75% Shipping Discount',
    price: 249,
    color: 'Green',
    BgColor:'success',
    colorOptions: ['Brown', 'Gray', 'Yellow'],
    quantity: 2,
    deliveryTime: '4 Days',
    deliveryBg:'info'
  },
  {
    id: 5,
    name: 'Yellow Gents Shoe',
    image: './assets/images/ecommerce/png/37.png',
    remainingItems: 52,
    discount: '15% Merchant Discount',
    price: 1299,
    color: 'Black',
    BgColor:'primary',
    colorOptions: ['Brown', 'Gray', 'Yellow'],
    quantity: 2,
    deliveryTime: '2 Days',
    deliveryBg:'primary'
  }
];

@Component({
    selector: 'app-cart',
    imports: [SharedModule, RouterModule, FormsModule, ReactiveFormsModule, NgbTooltipModule, SpkDropdownsComponent, NgbNavModule, SpkReusableTablesComponent],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent {
  items: any[] = [];
  itemIndex!: number;

  cartColumn = [
    {
      header:'Product Name'
  },
  {
      header:'Price'
  },
  {
      header:'Color'
  },
  {
    header:'Quantity'
},
{
    header:'Expected Delivery'
},
{
  header:'Total'
},
{
  header:'Action'
}
  ]
 
  Product = DATA;
  
  incrementQuantity(Product: any): void {
    Product.quantity++;
  }

  decrementQuantity(Product: any): void {
    if (Product.quantity > 1) {
      Product.quantity--;
    }
  }
  confirmAlert(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true, // This shows the Cancel button
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true // Optional: reverses the position of the confirm and cancel buttons
    }).then((result) => {
      if (result.isConfirmed) { // result.isConfirmed is true if "Yes, delete it!" was clicked
        const data = this.Product.filter((x: { id: any }) => x.id !== id);
        this.Product = data;
        Swal.fire('Deleted!', 'Your item has been deleted!', 'success');
      } else { 
        // User clicked "Cancel" or closed the alert
    
      }
    });
  }

  Clear = () => {
    this.Product = [];
  };

  allTasksChecked: boolean = false;
  tasks: any[] = [/* your tasks here */];

  toggleSelectAll(event: Event) {
    this.allTasksChecked = (event.target as HTMLInputElement).checked;
  }
  
}
  
