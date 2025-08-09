import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pagination } from 'swiper/modules';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reviews',
    imports: [SharedModule, NgbModule, CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
  @ViewChild('swiperContainer2') swiperContainer2!: ElementRef;
  @ViewChild('swiperContainer3') swiperContainer3!: ElementRef;
  @ViewChild('swiperContainer4') swiperContainer4!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
		  slidesPerView: 1,
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
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE2 = this.swiperContainer1.nativeElement;
	
		Object.assign(swiperE2, {
		  slidesPerView: 1,
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
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE3 = this.swiperContainer2.nativeElement;
	
		Object.assign(swiperE3, {
      modules: [Pagination],
		  slidesPerView: 4,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 4,
			  spaceBetween: 20,
			},

		  },
	  });
    const swiperE4 = this.swiperContainer3.nativeElement;
	
		Object.assign(swiperE4, {
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
        770:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
			1020: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},

		  },
	  });

    const swiperE5 = this.swiperContainer4.nativeElement;
	
		Object.assign(swiperE5, {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          },
          770:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
        1020: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
		  },
	  });
	}


  users = [
    {
      status: 'Completed',
      percentage: '88%',
      match: 'Match',
      description: 'Diligently craft tailored marketing campaigns to drive business growth...',
      avatar: './assets/images/faces/1.jpg',
      name: 'Autumn Quinn',
      role: 'Client',
      rating: 4.5,
      badgeClass: 'bg-primary',
      borderClass: 'border-primary',
      bgClass: 'bg-primary-transparent'
    },
    {
      status: 'Scheduled',
      percentage: '32%',
      match: 'Match',
      description: 'Diligently craft tailored marketing campaigns to drive business growth...',
      avatar: './assets/images/faces/2.jpg',
      name: 'Berina Silva',
      role: 'Agent',
      rating: 4.5,
      badgeClass: 'bg-secondary',
      borderClass: 'border-secondary',
      bgClass: 'bg-secondary-transparent'
    },
    {
      status: 'Pending',
      percentage: '32%',
      match: 'Match',
      description: 'Diligently craft tailored marketing campaigns to drive business growth...',
      avatar: './assets/images/faces/3.jpg',
      name: 'William Chen',
      role: 'Designer',
      rating: 4.5,
      badgeClass: 'bg-success',
      borderClass: 'border-success',
      bgClass: 'bg-success-transparent'
    },
    {
      status: 'Unavailable',
      percentage: '92%',
      match: 'Match',
      description: 'Diligently craft tailored marketing campaigns to drive business growth...',
      avatar: './assets/images/faces/7.jpg',
      name: 'Donovan Frost',
      role: 'Agent',
      rating: 4.5,
      badgeClass: 'bg-info',
      borderClass: 'border-info',
      bgClass: 'bg-info-transparent'
    },
    {
      status: 'Completed',
      percentage: '92%',
      match: 'Match',
      description: 'Diligently craft tailored marketing campaigns to drive business growth...',
      avatar: './assets/images/faces/6.jpg',
      name: 'Luna Park',
      role: 'Agent',
      rating: 4.5,
      badgeClass: 'bg-warning',
      borderClass: 'border-warning',
      bgClass: 'bg-warning-transparent'
    }
  ];

  reviews = [
      {
        name: 'Autumn Quinn',
        since: 'User since 2023',
        avatar: './assets/images/faces/1.jpg',
        review: 'The sleek design immediately caught my eye, and the functionality sealed the deal. It performs exceptionally well.',
        rating: 4.5,
        date: '9 Days Ago',
        badgeClass: 'primary'
      },
      {
        name: 'Barina Silva',
        since: 'User since 2021',
        avatar: './assets/images/faces/2.jpg',
        review: 'The sleek design immediately caught my eye, and the functionality sealed the deal. It performs exceptionally well.',
        rating: 3.5,
        date: '2 Days Ago',
        badgeClass: 'secondary'
      },
      {
        name: 'Luna Park',
        since: 'User since 2022',
        avatar: './assets/images/faces/3.jpg',
        review: 'The sleek design immediately caught my eye, and the functionality sealed the deal. It performs exceptionally well.',
        rating: 4.5,
        date: 'Today',
        badgeClass: 'success'
      },
      {
        name: 'Donovan Frost',
        since: 'User since 2001',
        avatar: './assets/images/faces/4.jpg',
        review: 'The sleek design immediately caught my eye, and the functionality sealed the deal. It performs exceptionally well.',
        rating: 5,
        date: '12 Days Ago',
        badgeClass: 'info'
      },
      {
        name: 'William Chen',
        since: 'User since 2009',
        avatar: './assets/images/faces/4.jpg',
        review: 'The sleek design immediately caught my eye, and the functionality sealed the deal. It performs exceptionally well.',
        rating: 5,
        date: '32 Days Ago',
        badgeClass: 'warning'
      }
    ];

    reviews1 = [
      {
        review: "Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended.",
        avatar: "./assets/images/faces/1.jpg",
        name: "Luna Park",
        rating: 4.5,
        
      },
      {
        review: "Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended.",
        avatar: "./assets/images/faces/2.jpg",
        name: "Lucas Hayes",
        rating: 4.5,
       
      },
      {
        review: "Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended.",
        avatar: "./assets/images/faces/5.jpg",
        name: "Abigail Scott",
        rating: 4.5,
       
      },
      {
        review: "Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended.",
        avatar: "./assets/images/faces/4.jpg",
        name: "Henry Morgan",
        rating: 4.5,
        
      },
      {
        review: "Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended.",
        avatar: "./assets/images/faces/6.jpg",
        name: "Jhon Hentry",
        rating: 4.5,
       
      }
    ];

    reviews2 = [
      {
        name: 'Autumn Quinn',
        role: 'UX Guru',
        avatar: './assets/images/faces/1.jpg',
        review: "This product simplifies a daily task and has become indispensable for me. I can't imagine reverting to the old way.",
        ribbon: 'Critical',
        ribbonClass: 'ribbon-primary',
        rating: 4.5
      },
      {
        name: 'Barina Silva',
        role: 'Visual Wizard',
        avatar: './assets/images/faces/2.jpg',
        review: "This product simplifies a daily task and has become indispensable for me. I can't imagine reverting to the old way.",
        ribbon: 'Popular',
        ribbonClass: 'ribbon-secondary',
        rating: 4.5
      },
      {
        name: 'Locus Zent',
        role: 'Design Mavin',
        avatar: './assets/images/faces/3.jpg',
        review: "This product simplifies a daily task and has become indispensable for me. I can't imagine reverting to the old way.",
        ribbon: 'Business',
        ribbonClass: 'ribbon-success',
        rating: 4.5
      },
      {
        name: 'Ethan Brown',
        role: 'UI Trailblazer',
        avatar: './assets/images/faces/4.jpg',
        review: "This product simplifies a daily task and has become indispensable for me. I can't imagine reverting to the old way.",
        ribbon: 'Localize',
        ribbonClass: 'ribbon-info',
        rating: 4.5
      },
      {
        name: 'Juniper Cruz',
        role: 'Innovation Ninja',
        avatar: './assets/images/faces/6.jpg',
        review: "This product simplifies a daily task and has become indispensable for me. I can't imagine reverting to the old way.",
        ribbon: 'Expert',
        ribbonClass: 'ribbon-warning',
        rating: 4.5
      }
    ];

    reviews3 = [
      {
        name: 'Juniper Cruz',
        role: 'UX Guru',
        email: 'junipercruz12@gmail.com',
        avatar: './assets/images/faces/3.jpg',
        review: 'This product simplifies a daily task and has become indispensable for me. I can\'t imagine reverting to the old way.',
        ribbon: 'primary',
        date: '12 days ago',
        rating: 4.5
      },
      {
        name: 'Caleb Brooks',
        role: 'Visual Wizard',
        email: 'calebbrooks@gmail.com',
        avatar: './assets/images/faces/9.jpg',
        review: 'This product simplifies a daily task and has become indispensable for me. I can\'t imagine reverting to the old way.',
        ribbon: 'secondary',
        date: '9 days ago',
        rating: 4.5
      },
      {
        name: 'Barina Silva',
        role: 'Design Mavin',
        email: 'barinasilva212@gmail.com',
        avatar: './assets/images/faces/8.jpg',
        review: 'This product simplifies a daily task and has become indispensable for me. I can\'t imagine reverting to the old way.',
        ribbon: 'success',
        date: '6 days ago',
        rating: 4.5
      },
      {
        name: 'Lucas Tope',
        role: 'UI Trailblazer',
        email: 'lucastope1999@gmail.com',
        avatar: './assets/images/faces/10.jpg',
        review: 'This product simplifies a daily task and has become indispensable for me. I can\'t imagine reverting to the old way.',
        ribbon: 'warning',
        date: '10 days ago',
        rating: 4.5
      },
      {
        name: 'Ethan Brown',
        role: 'Innovation Ninja',
        email: 'ethanbrown345@gmail.com',
        avatar: './assets/images/faces/1.jpg',
        review: 'This product simplifies a daily task and has become indispensable for me. I can\'t imagine reverting to the old way.',
        ribbon: 'info',
        date: '16 days ago',
        rating: 4.5
      }
    ];



}
