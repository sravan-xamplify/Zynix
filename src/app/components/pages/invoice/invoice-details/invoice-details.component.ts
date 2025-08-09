import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
    selector: 'app-invoice-details',
    imports: [SharedModule, SpkReusableTablesComponent],
    templateUrl: './invoice-details.component.html',
    styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent {

  companiesColumn = [
    {header:'BRAND NAME'},
    {header:'DESCRIPTION'},
    {header:'QUANTITY'},
    {header:'PRICE PER UNIT'},
    {header:'TOTAL'},
  ]
  products = [
    {
      name: 'Dapzem & Co (Sweatshirt)',
      description: 'Branded hoodie ethnic style',
      quantity: 2,
      price: 60,
      totalPrice: 120,
    },
    {
      name: 'Denim Winjo (Jacket)',
      description: 'Vintage pure leather Jacket',
      quantity: 1,
      price: 249,
      totalPrice: 249,
    },
    {
      name: 'Jimmy Lolfiger (Winter Coat)',
      description: 'Unisex jacket for men & women',
      quantity: 1,
      price: 499,
      totalPrice: 499,
    },
    {
      name: 'Blueberry & Co',
      description: 'Light colored sweater form blueberry',
      quantity: 3,
      price: 299,
      totalPrice: 897,
    },
    {
      name: 'Denim Corporation',
      description: 'Flap pockets denim jackets for men',
      quantity: 1,
      price: 599,
      totalPrice: 599,
    },
  ];
}
