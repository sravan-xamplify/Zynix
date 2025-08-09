import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-order-details',
    imports: [NgbDropdownModule, CommonModule, SpkReusableTablesComponent, NgbAccordionModule, SpkDropdownsComponent],
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  
  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
}

  orderHeader = [
    {
      header:'Item'
    },
    {
      header:'Category'
    },
    {
      header:'Tracking ID'
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
      header:'Total Price'
    },
  ]
  orderData = [
    {
      name: 'Alarm Clock',
      category: 'Electronics',
      trackingId: 'SPK1218153635',
      price: 1249,
      color: 'Navy Blue',
      quantity: 1,
      totalPrice: 1249,
      imageUrl: './assets/images/ecommerce/jpg/3.jpg',
      brand: 'Dolce & Gabbana'
    },
    {
      name: 'Ladies Stylish Shoe',
      category: 'Footwear',
      trackingId: 'SPK3789423789',
      price: 499,
      color: 'Orange',
      quantity: 2,
      totalPrice: 998,
      imageUrl: './assets/images/ecommerce/jpg/9.jpg',
      brand: 'Adidas'
    },
    {
      name: 'ComfortSeat Wooden Sofa',
      category: 'Furniture',
      trackingId: 'SPK1120324532',
      price: 799,
      color: 'Light Green',
      quantity: 1,
      totalPrice: 799,
      imageUrl: './assets/images/ecommerce/jpg/2.jpg',
      brand: 'Reformation'
    },
    {
      name: 'ComfortWalk Ultra Men\'s Shoe',
      category: 'Footwear',
      trackingId: 'SPK1120324532',
      price: 799,
      color: 'Purple',
      quantity: 1,
      totalPrice: 799,
      imageUrl: './assets/images/ecommerce/jpg/6.jpg',
      brand: 'Urban Outfitters'
    },
    {
      name: 'Red Flower Pot',
      category: 'Decoration',
      trackingId: 'SPK1120324532',
      price: 799,
      color: 'Yellow',
      quantity: 1,
      totalPrice: 799,
      imageUrl: './assets/images/ecommerce/jpg/8.jpg',
      brand: 'Patagonia'
    }
  ];
  cartSummary = [
    { label: 'Total Items', value: '06' },
    { label: 'Applied Coupon', value: '<span class="badge bg-success-transparent">SP0578A</span>' },
    { label: 'Delivery Fees', value: '<span class="text-danger">+$29</span>' },
    { label: 'Sub Total', value: '<span class="fs-14 fw-medium">$3,799</span>' },
    { label: 'Total Price', value: '<span class="fs-20 fw-semibold">$3,129</span>' }
  ];
  Address = [
    { label: 'Address Line', value: ' 14 Angle colony' },
    { label: 'Flat/Building Name', value: 'srinivas Nivas' },
    { label: 'District Name', value: 'Hyderabad' },
    { label: 'State Name', value: 'Telangana' },
    { label: 'Pincode', value: '535124' }
  ];
  Details = [
    { label: 'Full Name', value: 'Lucas Hayes' },
    { label: 'Email Id', value: '<span class="fs-14 fw-medium text-primary text-decoration-underline">lucas123&#64;gmail.com</span>' },
    { label: 'Phone Number', value: '+12764845456' },
    { label: 'Available Time', value: '9:00 AM - 6:00 PM' },
    { label: 'Billing Adress', value: 'sr nagar,Vizag,535124' }
  ];

}
