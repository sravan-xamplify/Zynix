import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  title1?:string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  bgshadow?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
  dirchange?: boolean;
  nochild?: any;
  items?: unknown;
}

@Injectable({
  providedIn: 'root',
})

export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
    { headTitle: 'Dashboards' },
    {
      title: 'Dashboards',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      type: 'sub',
      selected: false,
      active: false,
      dirchange: false,
      children: [
        { path: '/sales', title: 'sales', type: 'link', dirchange: false },
        {
          path: '/dashboards/analytics',
          title: 'Analytics',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/ecommerce',
          title: 'Ecommerce',
          type: 'link',
          dirchange: false,
        },
       
        {
          path: '/dashboards/crm',
          title: 'CRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/crypto',
          title: 'Crypto',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/nft',
          title: 'NFT',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/projects',
          title: 'Projects',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/jobs',
          title: 'Jobs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/hrm',
          title: 'HRM',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/courses',
          title: 'Courses',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/stocks',
          title: 'Stocks',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/medical',
          title: 'Medical',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/pos-system',
          title: 'pos-system',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/podcast',
          title: 'Podcast',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/school',
          title: 'School',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/dashboards/social-media',
          title: 'Social Media',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    { headTitle: 'Web Apps' },
    {
      title: 'Apps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>`,
      bgshadow: 'success',
      active: false,
      dirchange: false,
      children: [
        {
          path: '/apps/full-calender',
          title: 'Full Calender',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/gallery',
          title: 'Gallery',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/apps/sweetalerts',
          title: 'Sweetalerts',
          type: 'link',
          dirchange: false,
        },
        
        {
          title: 'Ecommerce',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/ecommerce/add-product',
              title: 'Add Product',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/cart',
              title: 'Cart',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/checkout',
              title: 'Check out',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/edit-product',
              title: 'Edit Product',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/order-details',
              title: 'Order Details',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/orders',
              title: 'Orders',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/products',
              title: 'Products',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/product-details',
              title: 'Product Details',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/products-list',
              title: 'Products List',
              type: 'link',
               dirchange: false,
            },
            {
              path: '/apps/ecommerce/wishlist',
              title: 'Wishlist',
              type: 'link',
               dirchange: false,
            },
          ],
        },
        {
          title: 'Projects',
          type: 'sub',
          badgeClass: 'secondary',
          badgeText: 'secondary',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/projects/project-list',
              title: 'Project List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/project-overview',
              title: 'Project Overview',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/projects/create-project',
              title: 'Create Project',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Tasks',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/tasks/kanban-board',
              title: 'Kanban Board',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/tasks/list-view',
              title: 'List View',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/tasks/task-details',
              title: 'Task Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Jobs',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/jobs/job-details',
              title: 'Job Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-company',
              title: 'Search Company',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-jobs',
              title: 'Search Jobs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/job-post',
              title: 'Job Post',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/jobs-list',
              title: 'Jobs List',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/search-candidate',
              title: 'Search Candidate',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/jobs/candidate-details',
              title: 'Candidate Details',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'NFT',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/nft/market-place',
              title: 'Market place',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/nft-details',
              title: 'NFT Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/create-nft',
              title: 'Create NFT',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/wallet-integration',
              title: 'Wallet Integration',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/nft/live-auction',
              title: 'Live auction',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'CRM',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crm/contacts',
              title: 'Contacts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/companies',
              title: 'Companies',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/deals',
              title: 'Deals',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crm/leads',
              title: 'Leads',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Crypto',
          type: 'sub',
          badgeClass: 'badge bg-secondary-transparent',
          badgeValue: 'New',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/apps/crypto/transactions',
              title: 'Transactions',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/currency-exchange',
              title: 'Currency Exchange',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/buy-sell',
              title: 'Buy & Sell',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/marketcap',
              title: 'Marketcap',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/apps/crypto/wallet',
              title: 'Wallet',
              type: 'link',
              dirchange: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Nested Menu',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="32 176 128 232 224 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="32 128 128 184 224 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon></svg>`,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Nested-1',
          dirchange: false,
          type: 'empty',
          active: false,
          selected: false,
          path: '/nested-menu/nested-1',
        },
        {
          title: 'Nested-2',
          type: 'sub',
          active: false,
          children: [
            {
              title: 'Nested-2.1',
              type: 'empty',
              active: false,
            },
            {
              title: 'Nested-2.2',
              type: 'empty',
              active: false,
            }
          ],
        },
      ],
    },
    { headTitle: 'Crafted' },
    {
      title: 'Authentication',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="88" width="176" height="128" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="128" cy="152" r="12"></circle><path d="M88,88V56a40,40,0,0,1,80,0V88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      selected: false,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/authentication/coming-soon',
          title: 'Coming-Soon',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Create Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/create-password/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/create-password/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Lock Screen',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/lock-screen/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/lock-screen/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Reset Password',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/reset-password/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/reset-password/cover',
              title: 'cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Sign Up',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/sign-up/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/sign-up/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Sign In',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/sign-in/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/sign-in/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Two-Step Verification',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: 'authentication/twostep-verification/basic',
              title: 'Basic',
              type: 'link',
              dirchange: false,
            },
            {
              path: 'authentication/twostep-verification/cover',
              title: 'Cover',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          title: 'Under Maintainance',
          path: '/authentication/under-maintainance',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Error Pages',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><line x1="128" y1="136" x2="128" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="172" r="12"></circle></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: 'error/error401',
          title: '401 - Error ',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error404',
          title: '404 - Error ',
          type: 'link',
          dirchange: false,
        },
        {
          path: 'error/error500',
          title: '500 - Error ',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Pages',
      type: 'sub',
      active: false,
      selected: false,
      dirchange: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="80" y1="96" x2="176" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="80" y1="128" x2="176" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="80" y1="160" x2="176" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
      children: [
        {
          title: 'Blog',
          type: 'sub',
          active: false,
          dirchange: false,
          selected: false,
          children: [
            {
              path: '/pages/blog/blog',
              title: 'Blog',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/blog-details',
              title: 'Blog Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/blog/create-blog',
              title: 'Create Blog',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/chat',
          title: 'Chat',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Email',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/email/mailapp',
              title: 'Mail App',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/email/mail-settings',
              title: 'mail Settings',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/empty',
          title: 'Empty',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/faqs',
          title: "FAQ's",
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/file-manager',
          title: "File Manager",
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Invoice',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/pages/invoice/create-invoice',
              title: 'Create Invoice',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-details',
              title: 'Invoice Details',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/pages/invoice/invoice-list',
              title: 'Invoice List',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/pages/pricing',
          title: 'Pricing',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/profile',
          title: 'Profile',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/profile-settings',
          title: 'Profile Settings',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/landing-page',
          title: 'Landing Page',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/reviews',
          title: 'Reviews',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/search-page',
          title: 'Search',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/team',
          title: 'Team',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/terms-conditions',
          title: 'Terms & Conditions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/timeline',
          title: 'Timeline',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/pages/todolist',
          title: 'To Do List',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    { headTitle: 'Modules' },
    {
      title: 'Forms',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="144" y1="112" x2="192" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="144" y1="144" x2="192" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><rect x="64" y="96" width="48" height="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/forms/form-advanced',
          title: 'Form Advanced',
          type: 'link',
          dirchange: false,
        },
        {
          title: 'Form Elements',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/forms/form-elements/inputs',
              title: 'Inputs',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/checks-radios',
              title: 'Check & Radios',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputgroup',
              title: 'Input Group',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/formselect',
              title: 'Form Select',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/range-slider',
              title: 'Range Slider',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/inputmask',
              title: 'Input Masks',
              type: 'link',
              dirchange: false,
            },

            {
              path: '/forms/form-elements/file-uploads',
              title: 'File Uploads',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/date&timepicker',
              title: 'Date Time Picker',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/forms/form-elements/color-pickers',
              title: 'Color Pickers',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/forms/floating-labels',
          title: 'Floating Labels',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-layouts',
          title: 'Form Layouts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-wizards',
          title: 'Form Wizards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/form-editor',
          title: 'Form Editor',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/validation',
          title: 'Validation',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/forms/select2',
          title: 'Select2',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Ui Elements',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="24" y="56" width="208" height="40" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/ui-elements/alerts',
          title: 'Alerts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/badge',
          title: 'Badge',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/breadcrumb',
          title: 'Breadcrumb',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/buttons',
          title: 'Buttons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/button-group',
          title: 'Button Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/cards',
          title: 'cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/dropdowns',
          title: 'DropDowns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/images&figures',
          title: 'Images Figures',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/links-interactions',
          title: 'Links Interactions',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/list-group',
          title: 'List Group',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/nav-tabs',
          title: 'Navs & Tabs',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/objectfit',
          title: 'Object Fit',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/pagination',
          title: 'Pagination',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/popovers',
          title: 'Popovers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/progress',
          title: 'Progress',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/spinners',
          title: 'Spinners',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/toasts',
          title: 'Toasts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/tooltips',
          title: 'Tooltips',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/ui-elements/typography',
          title: 'Typography',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Advanced Ui',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M168,72s0-24,24-24,24-24,24-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="144" y1="16" x2="144" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="216" y1="112" x2="232" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="216" y1="80" x2="240" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="78.09" y1="102.09" x2="153.91" y2="177.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="101.11" y1="197.11" x2="58.89" y2="154.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/advanced-ui/accordions',
          title: 'Accordions & Collapse',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/carousel',
          title: 'Carousel',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/draggable-cards',
          title: 'Draggable Cards',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/media-player',
          title: 'Media Player',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/modals-closes',
          title: 'Models & Closes',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/navbar',
          title: 'Navbar',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/offcanvas',
          title: 'OffCanvas',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/placeholders',
          title: 'placeholders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ratings',
          title: 'Ratings',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/ribbons',
          title: 'Ribbons',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/scrollspy',
          title: 'Scrollspy',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/sortable-js',
          title: 'Sortable JS',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/swiperjs',
          title: 'Swiper JS',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/tour',
          title: 'Tour',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/advanced-ui/treeview',
          title: 'Tree View',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Utilites',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          path: '/utilities/avatars',
          title: 'Avatars',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/borders',
          title: 'Borders',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/break-point',
          title: 'Breakpoints',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/colors',
          title: 'Colors',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/columns',
          title: 'Columns',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/css-grid',
          title: 'Css Grid',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/flex',
          title: 'Flex',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/gutters',
          title: 'Gutters',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/helpers',
          title: 'Helpers',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/position',
          title: 'Position',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/utilities/additional-content',
          title: 'Additional-content',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      path: 'widgets',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="80" width="192" height="48" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="128" y1="80" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M176.79,31.21c9.34,9.34,9.89,25.06,0,33.82C159.88,80,128,80,128,80s0-31.88,15-48.79C151.73,21.32,167.45,21.87,176.79,31.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M79.21,31.21c-9.34,9.34-9.89,25.06,0,33.82C96.12,80,128,80,128,80s0-31.88-15-48.79C104.27,21.32,88.55,21.87,79.21,31.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      title: 'Widgets',
      type: 'link',
      selected: false,
      active: false,
      dirchange: false,
    },
    
    { headTitle: 'Tools & components' },
    {
      title: 'Maps',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><polygon points="176 80 112 112 80 176 144 144 176 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/maps/leafletmaps',
          title: 'Leaflet Maps',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/maps/google-map',
          title: 'Google Map',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 139.59 48 216 208 216 208 139.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M96,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M160,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M224,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      path: 'icons',
      title: 'Icons',
      type: 'link',
      dirchange: false,
      nochild: true,
    },
    {
      title: 'Charts',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="200 72 128 144 96 112 32 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="200 112 200 72 160 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
      active: false,
      dirchange: false,
      children: [
        {
          title: 'Apex Charts',
          type: 'sub',
          active: false,
          dirchange: false,
          children: [
            {
              path: '/charts/apex-charts/line-charts',
              title: 'Line Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/area-charts',
              title: 'Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/column-charts',
              title: 'Column Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bar-charts',
              title: 'Bar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/mixed-charts',
              title: 'Mixed Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/rangearea-charts',
              title: 'Range Area Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/timeline-charts',
              title: 'TimeLine Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/candlestick-charts',
              title: 'CandleStick Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/boxplot-charts',
              title: 'BoxPlot Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/bubble-charts',
              title: 'Bubble charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/scatter-charts',
              title: 'Scatter Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/heatmap-charts',
              title: 'Heatmap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/treemap-charts',
              title: 'TreeMap Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/piecharts',
              title: 'Pie Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radialbar-charts',
              title: 'Radialbar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/radar-charts',
              title: 'Radar Charts',
              type: 'link',
              dirchange: false,
            },
            {
              path: '/charts/apex-charts/polararea-charts',
              title: 'Polararea Charts',
              type: 'link',
              dirchange: false,
            },
          ],
        },
        {
          path: '/charts/chartjs',
          title: 'Chartjs Charts',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/charts/echart',
          title: 'Echart Charts',
          type: 'link',
          dirchange: false,
        },
      ],
    },
    {
      title: 'Tables',
      type: 'sub',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="104" x2="88" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
      active: false,
      selected: false,
      dirchange: false,
      children: [
        {
          path: '/tables/tables',
          title: 'Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/angular-material-tables',
          title: 'Angular material Tables',
          type: 'link',
          dirchange: false,
        },
        {
          path: '/tables/ngx-easy-table',
          title: 'Ngx Easy Table',
          type: 'link',
          dirchange: false,
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
