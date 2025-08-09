import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import * as noUiSlider from 'nouislider';
import { SpkProductCardComponent } from '../../../../@spk/reusable-apps/spk-product-card/spk-product-card.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';


@Component({
    selector: 'app-products',
  imports: [NgbDropdownModule, RouterModule, CommonModule, NgSelectModule, SpkProductCardComponent, SpkNgSelectComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {
  Size= ['Small','Medium','Extra Large','Large'];
  Brand=[
    {label:'Cateye',value:1},
    {label:'Adidas',value:2},
    {label:'Trends',value:3},
   ]
  lowerValue: number = 8000;
  upperValue: number = 40000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }
  
  Math = Math;

  products = [
    {
      id: 1,
      name: 'Lightweight Sofa',
      price: 11846,
      originalPrice: 12957,
      discount: '24% Off',
      rating: 4.5,
      ratingCount: 563,
      brand: 'Patagonia',
      image: './assets/images/ecommerce/png/1.png',
      badgeClass: 'bg-primary',
    },
    {
      id: 2,
      name: 'Altra Pro Max Camera',
      price: 2965,
      originalPrice: 3675,
      discount: '75% Off',
      rating: 4.5,
      ratingCount: 235,
      brand: 'Stella McCartney',
      image: './assets/images/ecommerce/png/14.png',
      badgeClass: 'bg-secondary',
    },
    {
      id: 3,
      name: 'Perfume',
      price: 256,
      originalPrice: 345,
      discount: '92% Off',
      rating: 4.5,
      ratingCount: 1025,
      brand: 'Reformation',
      image: './assets/images/ecommerce/png/33.png',
      badgeClass: 'bg-success',
    },
    {
      id: 4,
      name: 'Alarm Clock',
      price: 974,
      originalPrice: 1200,
      discount: '35% Off',
      rating: 4.5,
      ratingCount: 674,
      brand: 'Supreme',
      image: './assets/images/ecommerce/png/10.png',
      badgeClass: 'bg-info',
    },
    {
      id: 5,
      name: 'Lightweight Sneakers',
      price: 771,
      originalPrice: 880,
      discount: '25% Off',
      rating: 4.5,
      ratingCount: 874,
      brand: 'Stealth Series',
      image: './assets/images/ecommerce/png/37.png',
      badgeClass: 'bg-warning',
    },
    {
      id: 6,
      name: 'Samsung Headset',
      price: 11856,
      originalPrice: 12764,
      discount: '54% Off',
      rating: 4.5,
      ratingCount: 874,
      brand: 'Givenchy',
      image: './assets/images/ecommerce/png/35.png',
      badgeClass: 'bg-teal',
    },
    {
      id: 7,
      name: 'Ladies Stylish Hand Bag',
      price: 640,
      originalPrice: 999,
      discount: '43% Off',
      rating: 4.5,
      ratingCount: 453,
      brand: 'Balenciaga',
      image: './assets/images/ecommerce/png/31.png',
      badgeClass: 'bg-pink',
    },
    {
      id: 8,
      name: 'Flower Pot',
      price: 499,
      originalPrice: 540,
      discount: '37% Off',
      rating: 4.5,
      ratingCount: 12,
      brand: 'Louis Vuitton',
      image: './assets/images/ecommerce/png/36.png',
      badgeClass: 'bg-danger',
    },
  ];
}
