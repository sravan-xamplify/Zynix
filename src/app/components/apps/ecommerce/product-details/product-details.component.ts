import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Navigation, Controller } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpkProductCardComponent } from '../../../../@spk/reusable-apps/spk-product-card/spk-product-card.component';
Swiper.use([Autoplay, Navigation,Controller,]);
register();

@Component({
    selector: 'app-product-details',
    imports: [SharedModule, NgbModule, RouterModule, NgSelectModule, CommonModule, FormsModule, SpkProductCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  active = 1
  private galleryThumbs!: Swiper;
  private galleryView!: Swiper;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;

  ngAfterViewInit() {
    this.initSwipers();
    const swiperEl = this.swiperContainer1.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 5,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 5,
			  spaceBetween: 20,
			},

		  },
	  });
  }

  

  private initSwipers(): void {
    this.galleryThumbs = new Swiper('.swiper-view-details', {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          direction: 'vertical',
          spaceBetween: 1,
        },
        768: {
          direction: 'vertical',
          spaceBetween: 1,
        },
      },
    });

    this.galleryView = new Swiper('.swiper-preview-details', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      freeMode: true,
      watchSlidesProgress: true,
      thumbs: {
        swiper: this.galleryThumbs,
      },
    });

    // Add click event for the gallery thumbnails
    this.addClickEventToThumbnails();
  }

  private addClickEventToThumbnails(): void {
    const thumbnails = document.querySelectorAll('.swiper-view-details .swiper-slide');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        this.galleryView.slideTo(index); // Navigate to the corresponding slide

        // Remove the active class from all thumbnails
        thumbnails.forEach(tn => tn.classList.remove('swiper-slide-thumb-active'));

        // Add the active class to the clicked thumbnail
        thumbnail.classList.add('swiper-slide-thumb-active');
      });
    });
  }



  quantity: number = 2; // Initial quantity
  // Method to increase the quantity
  increaseQuantity() {
    this.quantity++;
  }
  // Method to decrease the quantity (ensure it doesn’t go below 1)
  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  products = [
    {
      id: 1,
      name: 'Wooden Sofa',
      price: 1220,
      originalPrice: 1365,
      discount: 30,
      imageUrl: './assets/images/ecommerce/png/1.png',
      rating: 4.5,
      ratingsCount: 23,
      brand: 'Aliquyam'
    },
    {
      id: 2,
      name: 'CapturePro Camera',
      price: 586,
      originalPrice: 673,
      discount: 45,
      imageUrl: './assets/images/ecommerce/png/14.png',
      rating: 4.5,
      ratingsCount: 56,
      brand: 'Aliquyam'
    },
    {
      id: 3,
      name: 'Jasmin Perfume',
      price: 4653,
      originalPrice: 5585,
      discount: 76,
      imageUrl: './assets/images/ecommerce/png/33.png',
      rating: 4.5,
      ratingsCount: 85,
      brand: 'Aliquyam'
    },
    {
      id: 4,
      name: 'Collage Bag',
      price: 599,
      originalPrice: 999,
      discount: 75,
      imageUrl: './assets/images/ecommerce/png/34.png',
      rating: 4.5,
      ratingsCount: 103,
      brand: 'Aliquyam'
    }
  ];
  Math = Math
  
  RelatedProducts = [
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
    }
  ];
}
