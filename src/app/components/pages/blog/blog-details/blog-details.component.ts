import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightgalleryModule } from 'lightgallery/angular';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ng-gallery/lightbox';
import { CommonModule } from '@angular/common';
import { SpkBlogCategoryCardComponent } from '../../../../@spk/spk-reusable-pages/spk-blog-category-card/spk-blog-category-card.component';
import { SpkTagsComponent } from '../../../../@spk/reusable-apps/spk-tags/spk-tags.component';
import { SpkGalleryComponent } from '../../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';

@Component({
    selector: 'app-blog-details',
    imports: [SharedModule, NgbModule, HttpClientModule, NgbModule, LightgalleryModule, LightboxModule, CommonModule, SpkBlogCategoryCardComponent, SpkTagsComponent, SpkGalleryComponent],
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  blogs = [
    {
      image: './assets/images/media/blog/14.jpg',
      category: 'Technology',
      badgeColor:'primary',
      title: 'Introduction to AI in Web Development',
      timestamp: '2024-02-19 10:30 AM',
    },
    {
      image: './assets/images/media/blog/15.jpg',
      category: 'Travel',
      badgeColor:'success',
      title: 'Exploring Beautiful Landscapes in New Zealand',
      timestamp: '2024-02-18 03:45 PM',
    },
    {
      image: './assets/images/media/blog/16.jpg',
      category: 'Health & Wellness',
      badgeColor:'secondary',
      title: '10 Tips for a Healthy Lifestyle',
      timestamp: '2024-02-17 08:15 AM',
    },
    {
      image: './assets/images/media/blog/17.jpg',
      category: 'Food & Cooking',
      badgeColor:'info',
      title: 'Delicious Recipes for a Summer BBQ',
      timestamp: '2024-02-16 01:00 PM',
    }
  ];

  categories = [
    {
      iconClass: 'ri-leaf-fill text-primary bg-primary-transparent',
      name: 'Nature',
      itemsCount: 21,
      badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      iconClass: 'ri-discord-fill text-secondary bg-secondary-transparent',
      name: 'Sports',
      itemsCount: 16,
       badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      iconClass: 'ri-bowl-fill text-success bg-success-transparent',
      name: 'Food',
      itemsCount: 6,
       badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      iconClass: 'ri-suitcase-2-fill text-info bg-info-transparent',
      name: 'Travel',
      itemsCount: 18,
       badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      iconClass: 'ri-handbag-fill text-warning bg-warning-transparent',
      name: 'Fashion',
      itemsCount: 9,
       badgeClass: 'bg-primary-transparent text-primary'
    },
    {
      iconClass: 'ri-handbag-fill text-danger bg-danger-transparent',
      name: 'Beauty',
      itemsCount: 11,
       badgeClass: 'bg-primary-transparent text-primary'
    }
  ];

  tags = [
    '#blogger', '#styleblogger', '#livecolorfully', '#amwriting', '#analytics', 
    '#designblogger', '#picoftheday', '#adventure', '#landscape', '#fitnessgoals', 
    '#foodblogger', '#vegan', '#portrait', '#canonphotography', '#fineart', 
    '#trending', '#lifestyle', '#Montainviewpoint', '#Beauty', '#Nature', '#Art'
  ];

  comments = [
    {
      user: 'TechEnthusiast21',
      avatar: './assets/images/faces/3.jpg',
      commentText: 'Wow, these 3D images are mind-blowing! The depth and realism are incredible. It\'s like stepping into another dimension.',
      replies: [
        {
          user: 'Karnakaran463',
          avatar: './assets/images/faces/4.jpg',
          commentText: 'Great job on showcasing the power of 3D technology!',
        }
      ]
    },
    {
      user: 'ArtsyExplorer',
      avatar: './assets/images/faces/13.jpg',
      commentText: "The 3D images on your blog are a visual feast! I love how they bring a new level of engagement and interactivity. It's like art coming to life. Can't wait to see more creative uses of 3D in the future!",
    },
  ];

}

const data = [
  {
    srcUrl: './assets/images/media/media-48.jpg',
    previewUrl: './assets/images/media/media-48.jpg',
  },
  {
    srcUrl: './assets/images/media/media-49.jpg',
    previewUrl: './assets/images/media/media-49.jpg',
  },
  {
    srcUrl: './assets/images/media/media-50.jpg',
    previewUrl: './assets/images/media/media-50.jpg',
  },
  {
    srcUrl: './assets/images/media/media-51.jpg',
    previewUrl: './assets/images/media/media-51.jpg',
  },
  {
    srcUrl: './assets/images/media/media-52.jpg',
    previewUrl: './assets/images/media/media-52.jpg',
  },
  {
    srcUrl: './assets/images/media/media-53.jpg',
    previewUrl: './assets/images/media/media-53.jpg',
  },
  {
    srcUrl: './assets/images/media/media-54.jpg',
    previewUrl: './assets/images/media/media-54.jpg',
  },
  {
    srcUrl: './assets/images/media/media-55.jpg',
    previewUrl: './assets/images/media/media-55.jpg',
  },
]

