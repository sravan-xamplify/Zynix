import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, Inject, Renderer2, DOCUMENT } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbAccordionModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxColorsModule } from 'ngx-colors';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAccordionComponent } from '../../../@spk/spk-reusable-plugins/ngb-accordion/ngb-accordion.component';
import { SwiperComponent } from '../../../@spk/spk-reusable-plugins/swiper/swiper.component';
import { SpkGlanceCardsComponent } from '../../../@spk/reusable-landing-card/spk-glance-cards/spk-glance-cards.component';
import { SpkServicesCardComponent } from '../../../@spk/reusable-landing-card/spk-services-card/spk-services-card.component';
import { SpkTeamCardComponent } from '../../../@spk/reusable-landing-card/spk-team-card/spk-team-card.component';
import { SpkPricingCardComponent } from '../../../@spk/reusable-landing-card/spk-pricing-card/spk-pricing-card.component';

@Component({
    selector: 'app-landing-page',
    imports: [CommonModule, RouterModule, SpkGlanceCardsComponent, SpkServicesCardComponent, SpkTeamCardComponent,
        MatIconModule, FormsModule, SpkPricingCardComponent,
        NgxColorsModule, NgbAccordionModule, CarouselModule, ColorPickerModule, NgbAccordionComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [NgbOffcanvas],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
 
  isYearly: boolean = false;
  
    onToggle() {
    }
  thumbsSwiper: any;
  constructor(
    public renderer: Renderer2,
    private el: ElementRef,
    private elementRef: ElementRef,private sanitizer: DomSanitizer,   private viewScroller: ViewportScroller
  ){
    document.body.classList.add('landing-body');
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', 'light');
  this.renderer.removeAttribute(htmlElement, 'data-header-styles');
  this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
  this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
  this.renderer.removeAttribute(htmlElement, 'loader');
  this.renderer.removeAttribute(htmlElement, 'data-width');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb2');
  this.renderer.removeAttribute(htmlElement, 'light-rgb');
  htmlElement.removeAttribute('style');

  }
  private offcanvasService = inject(NgbOffcanvas);
  openSwitcher(content:any) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  
  input1: string = "#00897B";
  scrolled: boolean = false;
  SwitcherService: any;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  body!: HTMLBodyElement | null;

  color1 = '#845adf';
  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;
  
    const dynamicPrimaryLight = document.querySelectorAll(
      'button.pcr-button'
    );
  
    this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
  
    localStorage.setItem('zynix-primary-mode', this.hexToRgba(this.color1) || '');
    localStorage.setItem('zynixlight-mode', 'true');
    this.body?.classList.remove('transparent-mode');
  
    // Adding
    this.body?.classList.add('light-mode');
  
    // Removing
    this.body?.classList.remove('dark');
    this.body?.classList.remove('bg-img1');
  
  }
  handleThemeUpdate(cssVars: any) {
    const root: any = document.querySelector(':root');
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  // to check the value is hexa or not
   isValidHex = (hexValue: any) =>
    /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
  
   getChunksFromString = (st: any, chunkSize: any) =>
    st.match(new RegExp(`.{${chunkSize}}`, 'g'));
  // convert hex value to 256
   convertHexUnitTo256 = (hexStr: any) =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);
  hexToRgba(hexValue: any) {
    if (!this.isValidHex(hexValue)) {
      return null;
    }
    const chunkSize = Math.floor((hexValue.length - 1) / 3);
    const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
    const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
    return `${r}, ${g} ,${b}`;
  }
  //primary theme color
 dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--primary-rgb`;

    this.handleThemeUpdate({
      [cssPropName1]: this.hexToRgba(color),
    });
  });
}
localStorageBackUp() {
  let html = document.querySelector('html');
 
  

  if (localStorage.getItem('dir') == 'rtl') {
    html?.setAttribute("dir", 'rtl');
  }
  if (localStorage.getItem('zynixdarktheme')) {
    const type: any = localStorage.getItem('zynixdarktheme');
    html?.setAttribute('data-theme-mode', type);
   
  }
  if (localStorage.getItem("zynix-primary-mode")) { 
    const type: any = localStorage.getItem("zynix-primary-mode");
    html?.style.setProperty('--primary-rgb', type);
  }
}
public show: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);
  
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  isActive: boolean = false;
scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
  this.isActive = true; 
}
isDataToggled = false;
 
  expande = false;
  expande1 = false;
  expande2 = false;


  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }
  ngOnInit(): void {
 
    this.localStorageBackUp();
  }
  ngOnDestroy(): void {
    document.body.classList.remove('landing-body');    
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  } 
  themeChange(type: string, type1: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
    localStorage.setItem('zynixHeader', type1);
    this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
    localStorage.setItem('zynixMenu', type1);
    this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
    localStorage.setItem('zynixdarktheme', type1);
  }
  localdata:any=localStorage;
  //  Directions
  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('dir', type);
  }

  //Theme Primary
  primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type
    );
    localStorage.setItem('zynix-primary-mode', type);
    localStorage.removeItem('zynixlight-primary-color');
  }

  //reset switcher

  reset() {
    localStorage.clear();
    const html: any =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const body: any = document.querySelector('body');
    html.style = '';
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-header-styles', 'light');
    html.setAttribute('data-nav-layout', 'horizontal');
    html.setAttribute('data-menu-position', 'fixed');
    html.setAttribute('data-theme-mode', 'light');
    html.removeAttribute('data-menu-styles');

    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
    const ltrclickchecked = document.getElementById(
      'switcher-ltr'
    ) as HTMLInputElement;
    if (ltrclickchecked) {
      ltrclickchecked.checked = true;
    }
  }
  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }

  glanceCards = [
    {
      avatarBackground: 'bg-primary-transparent',
      avatarIconBackground: 'bg-primary svg-white',
      iconClass: 'ri-lightbulb-flash-line',
      title: 'Unparalleled Expertise',
      description: 'Our team combines years of industry experience with a deep understanding of the latest trends and technologies to deliver exceptional results.',
      linkText: 'Read More'
    },
    {
      avatarBackground: 'bg-secondary-transparent',
      avatarIconBackground: 'bg-secondary svg-white',
      iconClass: 'ri-shield-star-line',
      title: 'Proven Track Record',
      description: 'With a portfolio of successful projects and satisfied clients, we have a history of delivering high-quality outcomes on time and within budget.',
      linkText: 'Read More'
    },
    {
      avatarBackground: 'bg-success-transparent',
      avatarIconBackground: 'bg-success svg-white',
      iconClass: 'ri-shake-hands-line',
      title: 'Commitment to Quality',
      description: 'We are dedicated to maintaining the highest standards in everything we do, from the initial consultation to the final delivery.',
      linkText: 'Read More'
    }
  ];

  points = [
    'Having accumulated years of experience, we have earned a reputable standing in our field.',
    'We have assembled a team of knowledgeable and proficient individuals.',
    'We recognize that every client is unique, and we customize our services accordingly.',
    'Designed with convenience in mind, our services aim to make your experience effortless.',
    'Our support is available around the clock, every day of the year.'
  ];

  cards = [
    {
      backgroundClass: 'primary',
      iconPaths: [
        { d: 'M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.84-6.22l30.46-12.66a8,8,0,0,1,8.47,1.49Z', opacity: '0.2' },
        { d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z' }
      ],
      title: 'Business Audit',
      description: 'Justo aliquyam duo vero clita aliquyam vero eirmod stet amet dolorem ipsum.'
    },
    {
      backgroundClass: 'secondary',
      iconPaths: [
        { d: 'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z', opacity: '0.2' },
        { d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z' }
      ],
      title: 'Marketing',
      description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium.'
    },
    {
      backgroundClass: 'success',
      iconPaths: [
        { d: 'M208,40V208H152V40Z', opacity: '0.2' },
        { d: 'M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z' }
      ],
      title: 'Trading',
      description: 'Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim. Trade your product.'
    },
    {
      backgroundClass: 'info',
      iconPaths: [
        { d: 'M224,64l-12.16,66.86A16,16,0,0,1,196.1,144H70.55L56,64Z', opacity: '0.2' },
        { d: 'M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z' }
      ],
      title: 'Ecommerce',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiiss.'
    },
    {
      backgroundClass: 'warning',
      iconPaths: [
        { d: 'M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z', opacity: '0.2' },
        { d: 'M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z' }
      ],
      title: 'Financial Plans',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.'
    },
    {
      backgroundClass: 'teal ',
      iconPaths: [
        { d: 'M224,56l-96,88L32,56Z', opacity: '0.2' },
        { d: 'M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z' }
      ],
      title: 'Email Services',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.'
    },
    {
      backgroundClass: 'danger',
      iconPaths: [
        { d: 'M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z', opacity: '0.2' },
        { d: 'M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z' }
      ],
      title: 'Skilled',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.'
    },
    {
      backgroundClass: 'pink ',
      iconPaths: [
        { d: 'M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z', opacity: '0.2' },
        { d: 'M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z' }
      ],
      title: 'Planning',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.'
    },
  ];

  teamMembers = [
    {
      name: 'Jessica White',
      role: 'Director',
      avatarClass: 'bg-primary-transparent',
      image: './assets/images/faces/team/1.png',
      roleClass: 'text-primary',
      description:'Aliquam ullamcorper neque vitae dui ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.',
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Daniel Lewis',
      role: 'Manager',
      avatarClass: 'bg-secondary-transparent',
      image: './assets/images/faces/team/2.png',
      roleClass: 'text-secondary',  description:'Aliquam ullamcorper neque vitae dui ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.',
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Isabella King',
      role: 'Frontend Developer',
      avatarClass: 'bg-success-transparent',
      image: './assets/images/faces/team/3.png',
      roleClass: 'text-success',  description:'Aliquam ullamcorper neque vitae dui ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.',
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Ethan Evans',
      role: 'Freelancer',
      avatarClass: 'bg-info-transparent',
      image: './assets/images/faces/team/4.png',
      roleClass: 'text-info',  
      description:'Aliquam ullamcorper neque vitae dui ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.',
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
  ]

  pricingCards = [
    {
      title: 'Basic',
      subtitle: 'Essential features for a magical start',
      price: '$9.99',
      planLabel: 'Current Plan',
      backgroundClass: 'bg-secondary svg-white',
      borderClass: 'border-secondary bg-secondary-transparent',
      buttonClass: 'btn-secondary-light',
      iconPaths: [
        { d: 'M80,104V208H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8Z', opacity: '0.2' },
        { d: 'M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z' }
      ],
      features: [
        { name: 'Timeless Assistance', tag: 'Unlimited' },
        { name: 'Premium Experience' },
        { name: 'Infinite Updates' },
        { name: 'Risk-Free Trial', tag: '7 Days' },
        { name: 'Satisfaction Guarantee', tag: '30 Days' }
      ]
    },
    {
      title: 'Pro',
      subtitle: 'Essential features for a magical start',
      price: '$19.99',
      planLabel: 'Recommended',
      backgroundClass: 'bg-primary svg-white',
      borderClass: 'border-primary bg-primary-transparent',
      buttonClass: 'btn-primary',
      iconPaths: [
        { d: 'M128,48v80H40.87A146.29,146.29,0,0,1,40,112V56a8,8,0,0,1,8-8Zm0,80V232s78.06-21.3,87.13-104Z', opacity: '0.2' },
        { d: 'M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM120,220.55a130.85,130.85,0,0,1-30.93-18.74c-21.15-17.3-34.2-39.37-39-65.81H120ZM120,120H48.23c-.15-2.63-.23-5.29-.23-8l0-56h72Zm47.4,81.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42ZM208,112c0,2.71-.08,5.37-.23,8H136V56h72Z' }
      ],
      features: [
        { name: 'Timeless Assistance', tag: 'New' },
        { name: 'Premium Experience' },
        { name: 'Infinite Updates' },
        { name: 'Risk-Free Trial', tag: '15 Days' },
        { name: 'Satisfaction Guarantee', tag: '45 Days' }
      ]
    },
    {
      title: 'Premium',
      subtitle: 'Pinnacle excellence, VIP support.',
      price: '$29.99',
      planLabel: 'New Plan',
      backgroundClass: 'bg-success svg-white',
      borderClass: 'border-success bg-success-transparent',
      buttonClass: 'btn-success-light',
      iconPaths: [
        { d: 'M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z', opacity: '0.2' },
        { d: 'M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z' }
      ],
      features: [
        { name: 'Timeless Assistance', tag: 'New' },
        { name: 'Premium Experience' },
        { name: 'Infinite Updates' },
        { name: 'Risk-Free Trial', tag: '14 Days' },
        { name: 'Satisfaction Guarantee', tag: '60 Days' }
      ]
    }
  ];
  basicAccordions=[
    { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: false
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingTwo', 
       collapseId: 'collapseTwo',
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingThree', 
       collapseId: 'collapseThree' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFour', 
        collapseId: 'collapseFour' ,
        collapsed: true
       },
       {
        title: 'General Terms & Conditions (GTC)', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingFive', 
        collapseId: 'collapseFive' ,
        collapsed: true
       },
       {
        title: 'Do I need to create an account to make an order?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: true
       }
  ]
  basicAccordions1=[
    {
      title: 'General Terms & Conditions (GTC)', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingOne',
      collapseId: 'collapseOne', 
      collapsed: true
     },
     {
      title: 'Do I need to create an account to make an order?', 
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingTwo', 
      collapseId: 'collapseTwo',
      collapsed: true
     },
     { 
      title: 'Where can I subscribe to your newsletter?',
      body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
      headingId: 'headingThree', 
      collapseId: 'collapseThree' ,
      collapsed: true
     },
    {
       title: 'Where can in edit my address?',
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFour', 
       collapseId: 'collapseFour' ,
       collapsed: true
     },
    {
       title: 'What are your opening hours?', 
       body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
       headingId: 'headingFive', 
       collapseId: 'collapseFive' ,
       collapsed: true
      },
      {
        title: 'Do I have the right to return an item?', 
        body: '<strong>This is the first item\'s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',  
        headingId: 'headingSix', 
        collapseId: 'collapseSix' ,
        collapsed: false
       },
  ]

  reviews = [
    {
      name: 'Autumn Quinn',
      userSince: '2023',
      image: './assets/images/faces/1.jpg',
      review: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well.",
      rating: 4.5,
      timeAgo: '9 Days Ago'
    },
    {
      name: 'Barina Silva',
      userSince: '2021',
      image: './assets/images/faces/2.jpg',
      review: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well.",
      rating: 4.0,
      timeAgo: '2 Days Ago'
    },
    {
      name: 'Luna Park',
      userSince: '2023',
      image: './assets/images/faces/3.jpg',
      review: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well.",
      rating: 4.5,
      timeAgo: 'Today'
    },
    {
      name: 'Donovan Frost',
      userSince: '2001',
      image: './assets/images/faces/4.jpg',
      review: "The sleek design immediately caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well.",
      rating: 4.0,
      timeAgo: '12 Days Ago'
    }
  ];



}
     