import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Image,GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkTeamCardComponent } from '../../../../@spk/reusable-apps/spk-team-card/spk-team-card.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
    selector: 'app-nft-details',
  imports: [SharedModule, GalleryModule, NgbNavModule, CommonModule, SpkReusableTablesComponent, SpkTeamCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './nft-details.component.html',
    styleUrl: './nft-details.component.scss'
})
export class NftDetailsComponent {
  dotsConfig!: false;
  
  imagesRect: Image[] = [

    new Image(
      1,
      {
        img: './assets/images/nft-images/2.jpg', 
       
      },
      { img: './assets/images/nft-images/2.jpg',
    }
    ),
    new Image(2, { img: './assets/images/nft-images/3.jpg' }),
    new Image(
      3,
      {
        img: './assets/images/nft-images/4.jpg',
       
      },
      {
        img: './assets/images/nft-images/4.jpg',
     
      }
    ),
    new Image(
      4,
      {
        img: './assets/images/nft-images/5.jpg',
       
      },
      { img: './assets/images/nft-images/5.jpg',
      }
    ),
   
  ];

  nftItemsArt = [
    {
      imgSrc: './assets/images/nft-images/8.jpg',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Earthly Essence',
      creator: 'PixelCraftPro',
      topBid: '1.54',
    },
    {
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Code Canvas',
      creator: 'PixelCraftPro',
      topBid: '0.56',
    },
    {
      imgSrc: './assets/images/nft-images/2.jpg',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Abstract Wonders',
      creator: 'PixelCraftPro',
      topBid: '9.56',
    },
    {
      imgSrc: './assets/images/nft-images/8.jpg',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Earthly Essence',
      creator: 'PixelCraftPro',
      topBid: '1.54',
    },
    {
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Code Canvas',
      creator: 'PixelCraftPro',
      topBid: '0.56',
    },
  ];

  stats = [
    {
      value: '+12.75K',
      label: 'Items Displayed',
      bgClass: 'primary',
      borderClass: 'primary',
      iconClass: 'ri-bard-fill fs-16'
    },
    {
      value: '10.6K',
      label: 'Art Works',
      bgClass: 'secondary',
      borderClass: 'secondary',
      iconClass: 'ri-folder-image-fill fs-16'
    },
    {
      value: '9.55K',
      label: 'Owners',
      bgClass: 'success',
      borderClass: 'success',
      iconClass: 'ri-group-fill fs-16'
    },
    {
      value: '9.2/10',
      label: 'Total Rating',
      bgClass: 'info',
      borderClass: 'info',
      iconClass: 'ri-star-fill fs-16'
    }
  ];

  infoCards = [
    {
      icon: 'ri-briefcase-line',
      iconBackground: 'bg-primary',
      label: 'Experience Level',
      value: 'Intermediate'
    },
    {
      icon: 'ri-macbook-line',
      iconBackground: 'bg-secondary',
      label: 'Job Type',
      value: 'Contract Base'
    },
    {
      icon: 'ri-home-office-line',
      iconBackground: 'bg-success',
      label: 'Work Type',
      value: 'Remote'
    },
    {
      icon: 'ri-calendar-line',
      iconBackground: 'bg-info',
      label: 'Working Days',
      value: '5 Days/week'
    },
    {
      icon: 'ri-time-line',
      iconBackground: 'bg-warning',
      label: 'Working Hours',
      value: '9:30AM-6:00PM'
    }
  ];

  BuyingData = [
    {
      title: 'Fixed Price',
      iconClass: 'ri-price-tag-2-line fs-18',
      bgClass: 'primary-transparent',
      borderClass: 'primary',
    },
    {
      title: 'Open For Bids',
      iconClass: 'ri-shield-check-line fs-18',
      bgClass: 'secondary-transparent',
      borderClass: 'secondary',
    },
    {
      title: 'Timed Auction',
      iconClass: 'ri-hourglass-line fs-18',
      bgClass: 'success-transparent',
      borderClass: 'success',
    }
  ];
  nftDetails = [
    { label: 'Artist Name', value: 'Henry Milo' },
    { label: 'Royalty', value: '10% royalty paid to the artist on secondary sales' },
    { label: 'Total Bids', value: '32' },
    { label: 'Current Owner', value: 'Nikki Jones' },
    { label: 'NFT Type', value: 'Digital art work' }
  ];


  nftData = [
    {
      imageSrc: './assets/images/nft-images/16.jpg',
      title: 'Digital Masterpieces',
      subtitle: "This Month's Top Picks",
      badgeClass: 'badge bg-primary-transparent ',
      badgeCount: '13.2k',
      ethValue: '0.234',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/17.jpg',
      title: 'NFT Spotlight',
      subtitle: 'Curated Gems',
      badgeClass: 'badge bg-secondary-transparent',
      badgeCount: '5.2k',
      ethValue: '4.256',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/18.jpg',
      title: 'Exclusive Creations',
      subtitle: 'Featured of the Week',
      badgeClass: 'badge bg-success-transparent',
      badgeCount: '2.4k',
      ethValue: '3.124',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/10.jpg',
      title: 'Top-Tier Tokens',
      subtitle: 'Discover the Best NFTs',
      badgeClass: 'badge bg-info-transparent',
      badgeCount: '1.8k',
      ethValue: '1.263',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/11.jpg',
      title: 'Curated Collection',
      subtitle: 'Featured NFT Showcase',
      badgeClass: 'badge bg-warning-transparent',
      badgeCount: '12.9k',
      ethValue: '2.356',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/9.jpg',
      title: 'Digital Treasures',
      subtitle: 'Spotlight on Unique',
      badgeClass: 'badge bg-danger-transparent',
      badgeCount: '11.2k',
      ethValue: '0.874',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/13.jpg',
      title: 'Innovative Impression',
      subtitle: 'Highlighted NFTs',
      badgeClass: 'badge bg-success-transparent',
      badgeCount: '12.67k',
      ethValue: '0.127',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      imageSrc: './assets/images/nft-images/12.jpg',
      title: 'Iconic Drops',
      subtitle: 'Featured Digital Assets',
      badgeClass: 'badge bg-primary-transparent',
      badgeCount: '4.5k',
      ethValue: '4.643',
      currency: 'ETH',
      ethIcon: './assets/images/crypto-currencies/regular/Ethereum.svg'
    }
  ];
  jobCandidates = [
    {
      name: 'Charlotte',
      role: 'UI Developer',
      location: 'Kondapur, Hyderabad',
      imageUrl: './assets/images/faces/1.jpg',
      package: { current: '$2,300', expected: '$3,678' },
      languages: ['English', 'Hindi', 'Telugu'],
      skills: ['HTML', 'CSS', 'Javascript'],
      bond: '1 year bond accepted',
      experience: 'Exp: 2 Years'
    },
    {
      name: 'Isabella',
      role: 'Web Developer',
      location: 'Gachibowli, Hyderabad',
      imageUrl: './assets/images/faces/3.jpg',
      package: { current: '$3,600', expected: '$4,700' },
      languages: ['English', 'Telugu'],
      skills: ['React', 'React Native'],
      bond: '2 years bond accepted',
      experience: 'Exp: 4 Years'
    },
    {
      name: 'Abigail',
      role: 'Python Developer',
      location: 'Gachibowli, Chennai',
      imageUrl: './assets/images/faces/21.jpg',
      package: { current: '$4,300', expected: '$5,000' },
      languages: ['English', 'Hindi'],
      skills: ['Python', 'Java', 'React'],
      bond: '2 years bond accepted',
      experience: 'Exp: 4 Years'
    }
  ];

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
          500: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1400: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1600: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1800: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
      },
	  });
	}
  
	thumbsSwiper: any;
	setThumbsSwiper(swiper: any) {
		this.thumbsSwiper = swiper;
	  }

}

