import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { KanbanCardComponent } from '../../../../@spk/spk-kanban-card/kanban-card.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';

@Component({
    selector: 'app-product-list',
    imports: [NgbDropdownModule, CommonModule, RouterModule, KanbanCardComponent, SpkReusableTablesComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  cards = [
    {
      title: 'Payment Success',
      iconClass: 'checkbox-circle',
      bgColor: 'primary',
      value: '12,754',
      percentageChange: '0.19%',
      changeDirection: 'up',
      percentageColor: 'success',
      
    },
    {
      title: 'Payment Cancelled',
      iconClass: 'close-circle',
      bgColor: 'secondary',
      value: '895',
      percentageChange: '1.23%',
      changeDirection: 'down',
      percentageColor: 'danger',
      
    },
    {
      title: 'Total Customers',
      iconClass: 'group',
      bgColor: 'success',
      value: '32,854',
      percentageChange: '0.54%',
      changeDirection: 'up',
      percentageColor: 'success',
      
    },
    {
      title: 'Total Orders',
      iconClass: 'box-3',
      bgColor: 'info',
      value: '52,675',
      percentageChange: '0.16%',
      changeDirection: 'down',
      percentageColor: 'danger',
      
    },
    {
      title: 'Total Sellers',
      iconClass: 'team',
      bgColor: 'warning',
      value: '435',
      percentageChange: '0.29%',
      changeDirection: 'up',
      percentageColor: 'success',
      
    }
  ];

  TableDataHeader  = [
    {
      header :'Product'
    },
    {
      header :'Category'
    },
    {
      header :'Price'
    },
    {
      header :'Stock'
    },
    {
      header :'Status'
    },
    {
      header :'Seller'
    },
    {
      header :'Published'
    },
    {
      header :'Action'
    },

  ]

  TableData = [
    {
      id: 'product1',
      image: './assets/images/ecommerce/png/1.png',
      name: 'Wooden Sofa',
      brand: 'Accusam Brand',
      category: 'Electronic',
      price: '$1,299',
      stock: 283,
      status: 'Published',
      statusClass: 'bg-primary-transparent',
      seller: {
        name: 'Mayor Kelly',
        image: './assets/images/faces/4.jpg',
      },
      date: '24,Nov 2023 - 04:42PM'
    },
    {
      id: 'product2',
      image: './assets/images/ecommerce/png/14.png',
      name: 'Altra Pro Max Camera',
      brand: 'Saftynic Brand',
      category: 'Furniture',
      price: '$799',
      stock: 98,
      status: 'Unpublished',
      statusClass: 'bg-secondary-transparent',
      seller: {
        name: 'Andrew Garfield',
        image: './assets/images/faces/15.jpg',
      },
      date: '18,Nov 2023 - 06:53AM'
    },
    {
      id: 'product5',
      image: './assets/images/ecommerce/png/33.png',
      name: 'Jasmin Perfume',
      brand: 'Assian Brand',
      category: 'Electronic',
      price: '$2,499',
      stock: 194,
      status: 'Published',
      statusClass: 'bg-success-transparent',
      seller: {
        name: 'Simon Cowel',
        image: './assets/images/faces/11.jpg',
      },
      date: '12,Aug 2023 - 11:21AM'
    },
    {
      id: 'product6',
      image: './assets/images/ecommerce/png/10.png',
      name: 'Alarm Clock',
      brand: 'Trends Brand',
      category: 'Clothing',
      price: '$899',
      stock: 267,
      status: 'Unpublished',
      statusClass: 'bg-info-transparent',
      seller: {
        name: 'Mirinda Hers',
        image: './assets/images/faces/8.jpg',
      },
      date: '05,Sep 2023 - 10:14AM'
    },
    {
      id: 'product7',
      image: './assets/images/ecommerce/png/34.png',
      name: 'Children School Bag',
      brand: 'Topstyle Brand',
      category: 'Clothing',
      price: '$499',
      stock: 143,
      status: 'Published',
      statusClass: 'bg-warning-transparent',
      seller: {
        name: 'Simon Cowel',
        image: './assets/images/faces/1.jpg',
      },
      date: '18,Nov 2023 - 14:35PM'
    },
    {
      id: 'product8',
      image: './assets/images/ecommerce/png/31.png',
      name: 'Ladies Hand Bag',
      brand: 'Licker Brand',
      category: 'Watches',
      price: '$999',
      stock: 365,
      status: 'Published',
      statusClass: 'bg-pink-transparent',
      seller: {
        name: 'Mirinda Hers',
        image: './assets/images/faces/2.jpg',
      },
      date: '27,Nov 2023 - 05:12AM'
    },
    {
      id: 'product9',
      image: './assets/images/ecommerce/png/35.png',
      name: 'Samsung Headset',
      brand: 'Adidas Brand',
      category: 'Footware',
      price: '$1,499',
      stock: 257,
      status: 'Unpublished',
      statusClass: 'bg-info-transparent',
      seller: {
        name: 'Jhon Trendy',
        image: './assets/images/faces/9.jpg',
      },
      date: '29,Nov 2023 - 16:32PM'
    }
  ];
}
