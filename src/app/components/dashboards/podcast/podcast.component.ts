import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-podcast',
    imports: [SharedModule, NgApexchartsModule, NgbModule, SpkReusableTablesComponent, CommonModule, SpkDropdownsComponent],
    templateUrl: './podcast.component.html',
    styleUrl: './podcast.component.scss'
})
export class PodcastComponent {
  RecentlyPlayedPodcasts = [
    {
      title: 'Tech Talk',
      host: 'John Smith',
      duration: '45 Mins',
      avatar: './assets/images/media/media-61.jpg',
      isFavorite: false
    },
    {
      title: 'Science Explorers',
      host: 'Emily Johnson',
      duration: '30 Mins',
      avatar: './assets/images/media/media-59.jpg',
      isFavorite: true
    },
    {
      title: 'Business Insights',
      host: 'David Williams',
      duration: '60 Mins',
      avatar: './assets/images/media/media-62.jpg',
      isFavorite: false
    },
    {
      title: 'Health and Wellness',
      host: 'Michael Brown',
      duration: '50 Mins',
      avatar: './assets/images/media/media-71.jpg',
      isFavorite: false
    }
  ];

  Podcaster = [
    {
      name: 'Amanda Nanes',
      followers: '2,52,525 Followers',
      avatar: './assets/images/faces/10.jpg'
    },
    {
      name: 'Charles Achilles',
      followers: '12,563 Followers',
      avatar: './assets/images/faces/1.jpg'
    },
    {
      name: 'Julia Camo',
      followers: '2,52,525 Followers',
      avatar: './assets/images/faces/2.jpg'
    },
    {
      name: 'Json Taylor',
      followers: '2,52,525 Followers',
      avatar: './assets/images/faces/3.jpg'
    }
  ];

  PodcastCard = [
    {
      title: 'Midnight Serenade',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/11.jpg',
      duration: '2h 32m',
      listens: 67862
    },
    {
      title: 'Electric Dreamscape',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/12.jpg',
      duration: '2h 32m',
      listens: 67862
    },
    {
      title: 'Whispers in the Wind',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/14.jpg',
      duration: '2h 32m',
      listens: 67862
    },
    {
      title: 'Serendipity Symphony',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/13.jpg',
      duration: '2h 32m',
      listens: 67862
    },
    {
      title: 'Midnight Serenade',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/11.jpg',
      duration: '2h 32m',
      listens: 67862
    },
    {
      title: 'Electric Dreamscape',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/12.jpg',
      duration: '2h 32m',
      listens: 67862
    },
  ];
  PodcastCategory = [
    {
      title: 'Comedy',
      count: 250,
      imageUrl: './assets/images/podcast/1.png'
    },
    {
      title: 'News',
      count: 236,
      imageUrl: './assets/images/podcast/2.png'
    },
    {
      title: 'True Crime',
      count: 236,
      imageUrl: './assets/images/podcast/3.png'
    },
    {
      title: 'Technology',
      count: 236,
      imageUrl: './assets/images/podcast/4.png'
    },
    {
      title: 'Science',
      count: 236,
      imageUrl: './assets/images/podcast/5.png'
    },
    {
      title: 'Education',
      count: 236,
      imageUrl: './assets/images/podcast/6.png'
    },
    {
      title: 'Sports',
      count: 236,
      imageUrl: './assets/images/podcast/7.png'
    },
    {
      title: 'Music',
      count: 236,
      imageUrl: './assets/images/podcast/8.png'
    }
  ];

  podcastColumn = [
    {
      header:'Podcast Name'
    },
    {
      header:'duration'
    },
    {
      header:'Category'
    },
    {
      header:'Latest Episode'
    },
    {
      header:'Average Duration'
    },
    {
      header:'Favourites'
    },
    {
      header:'Action'
    }
  ]

  podcastsData = [
    {
      title: 'Random Ramblings',
      host: 'Alice Mumbleton',
      avatar: './assets/images/podcast/11.jpg',
      duration: '150s',
      category: 'Comedy',
      categoryClass: 'bg-secondary-transparent',
      episode: '#156: Silly Stories',
      episodeDuration: '45 mins',
      isFavorite: true
    },
    {
      title: 'Mindless Musings',
      host: 'Bob Jibberish',
      avatar: './assets/images/podcast/12.jpg',
      duration: '1 min',
      category: 'Culture',
      categoryClass: 'bg-success-transparent',
      episode: '#82: Deep Nonsense',
      episodeDuration: '30 mins',
      isFavorite: false
    },
    {
      title: 'Chatterbox Chronicles',
      host: 'Charlie Babbleworth',
      avatar: './assets/images/podcast/13.jpg',
      duration: '2 min',
      category: 'Personal Journal',
      categoryClass: 'bg-info-transparent',
      episode: '#30: Life\'s Random Moments',
      episodeDuration: '60 mins',
      isFavorite: true
    },
    {
      title: 'Ramble Roundup',
      host: 'Gary Gibberish',
      avatar: './assets/images/podcast/14.jpg',
      duration: '3 min',
      category: 'News and Politics',
      categoryClass: 'bg-warning-transparent',
      episode: '#300: Current Affairs',
      episodeDuration: '20 mins',
      isFavorite: false
    },
    {
      title: 'Babble Bites',
      host: 'Eddie Gibberoni',
      avatar: './assets/images/media/media-60.jpg',
      duration: '4 min',
      category: 'Food and Drink',
      categoryClass: 'bg-primary-transparent',
      episode: '#45: Culinary Capers',
      episodeDuration: '50 mins',
      isFavorite: true
    }
  ];


}
