import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpkBlogImageCardComponent } from '../../../../@spk/spk-reusable-pages/spk-blog-image-card/spk-blog-image-card.component';
import { SpkTagsComponent } from '../../../../@spk/reusable-apps/spk-tags/spk-tags.component';
import { SpkBlogCategoryCardComponent } from '../../../../@spk/spk-reusable-pages/spk-blog-category-card/spk-blog-category-card.component';

@Component({
    selector: 'app-blog',
    imports: [SharedModule, CarouselModule, CommonModule, RouterModule, SpkBlogImageCardComponent, SpkTagsComponent, SpkBlogCategoryCardComponent],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 8000,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  activeSlides!: SlidesOutputData;

  slidesStore: any[] = [
    {
      src: './assets/images/media/blog/1.jpg',
    },
    {
      src: './assets/images/media/blog/3.jpg',
    },
    {
      src: './assets/images/media/blog/2.jpg',
    },
  ];

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }

  Technologyblogs = [
    {
      title: 'The Intersection of Art and Technology',
      description: 'Discover how technology and art converge to create innovative and interactive experiences.',
      readMoreLink: 'javascript:void(0);',
      tags: ['Design', 'Research', 'Gaming'],
      authorName: 'Justin Kim',
      authorImage: './assets/images/faces/10.jpg',
      postDate: '20, Aug 2024 - 16:32',
      postImageTop: './assets/images/media/blog/4.jpg',
      postImageBottom: ''
    },
    {
      title: 'Artistic Trends to Watch in 2024',
      description: 'Stay ahead of the curve with a look at emerging art trends for the coming year. This blog post highlights.',
      readMoreLink: 'javascript:void(0);',
      tags: ['Design', 'Research', 'Gaming'],
      authorName: 'Monika Karen',
      authorImage: './assets/images/faces/5.jpg',
      postDate: '25, Aug 2024 - 11:45',
      postImageTop: './assets/images/media/blog/5.jpg',
      postImageBottom: ''
    },
    {
      title: 'Mastering the Art of Mixed Media',
      description: 'Learn the ins and outs of mixed media art, combining various materials and techniques to create unique works.',
      readMoreLink: 'javascript:void(0);',
      tags: ['Design', 'Research', 'Gaming'],
      authorName: 'Samantha Nans',
      authorImage: './assets/images/faces/8.jpg',
      postDate: '25, Aug 2024 - 04:25',
      postImageTop: './assets/images/media/blog/6.jpg',
      postImageBottom: ''
    }
  ];


  categories = [
    {
      icon: 'ri-lifebuoy-fill text-primary bg-primary-transparent',
      name: 'Lifestyle',
      itemCount: 24,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-bus-2-fill text-secondary bg-secondary-transparent',
      name: 'Travel & Adventure',
      itemCount: 43,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-service-fill text-success bg-success-transparent',
      name: 'Health & Wellness',
      itemCount: 14,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-macbook-fill text-info bg-info-transparent',
      name: 'Technology',
      itemCount: 132,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-t-shirt-fill text-warning bg-warning-transparent',
      name: 'Fashion & Beauty',
      itemCount: 36,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-wallet-3-fill text-danger bg-danger-transparent',
      name: 'Finance',
      itemCount: 4,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      icon: 'ri-home-gear-fill text-teal bg-teal-transparent',
      name: 'Modern Living',
      itemCount: 12,
      badgeClass: 'bg-primary-transparent text-primary'
    }
  ];

  tags = [
    '#Travel',
    '#Fitness',
    '#Fashion',
    '#FoodBlog',
    '#Crafting',
    '#BookReview',
    '#TechTalk',
    '#Parenting',
    '#Finance',
    '#SelfCare',
    '#Photography'
  ];
  blogs = [
    {
      title: 'Art Market Trends',
      description: 'Learn the essentials of starting and growing your art market business.',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Tilly',
      authorImage: './assets/images/faces/11.jpg',
      postDate: '19, Apr 2024 - 15:45',
      postImageTop: './assets/images/media/blog/15.jpg',
      ImagePlacementTop :true,
      dateFooterCard:false,
      wishlistFooterCard:true
    },
  ];

  blogs1 = [
      {
        title: 'The Future of Art: Predictions for the Next Decade',
        description: 'Venture into the future of art as we explore predictions and likely to shape the next decade.',
        readMoreLink: 'javascript:void(0);',
        authorName: 'Henry Milo',
        authorImage: './assets/images/faces/16.jpg',
        postDate: '31, Mar 2024 - 20:13',
        postImageTop: './assets/images/media/blog/20.jpg',
        ImagePlacementBottom :true,
        dateFooterCard:false,
        wishlistFooterCard:true
    }
  ];

  DateFooterCard = [
    {
      title: 'The Revival of Classical Art Techniques in Modern Times',
      description: 'Explore how traditional art techniques are making a comeback in contemporary art.',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Charlotte',
      authorImage: './assets/images/faces/4.jpg',
      postDate: '18, Aug 2024 - 11:25',
      postImageTop: './assets/images/media/blog/10.jpg',
      ImagePlacementTop :true,
      dateFooterCard:true,
      wishlistFooterCard:false
    },
    {
      title: 'The Role of Art in Mental Health and Wellness',
      description: 'Examine the profound impact art can have on mental health and well-being. This post discusses therapeutic art practices.',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Benjamin',
      authorImage: './assets/images/faces/12.jpg',
      postDate: '18, Aug 2024 - 11:25',
      postImageTop: './assets/images/media/blog/11.jpg',
       ImagePlacementTop :true,
      dateFooterCard:true,
      wishlistFooterCard:false
    },
    {
      title: 'Behind the Canvas: Interviews with Emerging Artists',
      description: 'Get an inside look at the creative processes and inspirations of up-and-coming artists.',
      readMoreLink: 'javascript:void(0);',
      authorName: 'Isabella',
      authorImage: './assets/images/faces/2.jpg',
      postDate: '18, Aug 2024 - 11:25',
      postImageTop: './assets/images/media/blog/8.jpg',
      ImagePlacementTop :true,
      dateFooterCard:true,
      wishlistFooterCard:false
    },
    {
      title: 'The Art of Collecting: Building Your Own Art Collection',
      description: 'Learn the essentials of starting and growing an art collection. This post provides advice.',
      readMoreLink: 'javascript:void(0);',
      authorName: 'William',
      authorImage: './assets/images/faces/14.jpg',
      postDate: '18, Aug 2024 - 11:25',
      postImageTop: './assets/images/media/blog/9.jpg',
       ImagePlacementTop :true,
      dateFooterCard:true,
      wishlistFooterCard:false
    }
  ];


  
}