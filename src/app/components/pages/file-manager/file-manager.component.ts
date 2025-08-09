import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { VisitorsData1 } from '../../../shared/data/dashboard_chartData/salechart.data';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-file-manager',
    imports: [NgApexchartsModule, NgbModule, SharedModule, FilePondModule, SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, SpkDropdownsComponent],
    templateUrl: './file-manager.component.html',
    styleUrl: './file-manager.component.scss'
})
export class FileManagerComponent {

    public chartOptions3 = VisitorsData1;

  constructor(private modalService: NgbModal,private sanitizer : DomSanitizer){
  }
  modalpopup(PopoversModal: any) {
    this.modalService.open(PopoversModal, { centered: true });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
      this.offcanvasService.open(content, { position: 'end' });
  }

  companiesColumn = [
    {header:'File Name'},
    {header:'Category'},
    {header:'Size'},
    {header:'Date Modified'},
    {header:'Action'},
  ]

  filesMenu = [
    {
      title: 'My Files',
      icon: 'ri-folder-2-line',
      badge: 322,
      link: 'javascript:void(0)',
      isActive: true
    },
    {
      title: 'Favourites',
      icon: 'ri-star-s-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Shared Files',
      icon: 'ri-share-forward-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Recycle Bin',
      icon: 'ri-delete-bin-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Recent Files',
      icon: 'ri-history-fill',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Settings',
      icon: 'ri-settings-3-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Help Center',
      icon: 'ri-questionnaire-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Version',
      icon: 'ri-folder-line',
      link: 'javascript:void(0)',
      isActive: false
    },
    {
      title: 'Log out',
      icon: 'ri-logout-box-line',
      link: 'javascript:void(0)',
      isActive: false
    }
  ];

  fileList = [
    {
      title: 'Doc-Snippets.docx',
      icon: 'ri-circle-line',
      iconColor: 'text-primary',
      size: '17.92 GB',
    },
    {
      title: 'Img-favorite.img',
      icon: 'ri-circle-line',
      iconColor: 'text-secondary',
      size: '22.7 GB',
    },
    {
      title: 'Vid-Populatshows.mkv',
      icon: 'ri-circle-line',
      iconColor: 'text-info',
      size: '32.65 GB',
    }
  ];


  MostRecent = [
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="32"height="32" fill="#000000"viewBox="0 0 256 256"> <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"></path></svg>',
        name: 'uipodcost.jpg',
        date: ' 16 Sep 2022',
        Bg:'primary',
        textcolor:'muted'
    },
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="32"height="32" fill="#000000" viewBox="0 0 256 256"><path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z"></path></svg>',
        name: 'mainfile.doc',
        date: ' 19 Aug 2023',
        Bg:'secondary',
        textcolor:'warning'
        
    },
    {   
        svg:' <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm72,108.53a8.18,8.18,0,0,1-8.25,7.47H192v16h15.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H192v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152.53ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184ZM128,144H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,128,144Zm-.49,56H120V160h8a20,20,0,0,1,20,20.77C147.58,191.59,138.34,200,127.51,200Z"></path></svg>',
        name: 'sourcemedia.pdf',
        date: ' 15 Oct 2024',
        Bg:'success',
        textcolor:'muted'
    },
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,84v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,112Z"></path></svg>',
        name: 'moviesfile.mp3',
        date: ' 12 Jan 2021',
        Bg:'info',
        textcolor:'muted'
    },
   
  ]

  fileData = [
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M69.77,112H208V88a8,8,0,0,0-8-8H130.67a8,8,0,0,1-4.8-1.6L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z" opacity="0.2"/><path d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
        category: 'Images',
        fileCount: '246 Files',
        size: ' 214.32MB',
        bgProgress:'primary',
        ProgressWidth:'65'
    },
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M69.77,112H208V88a8,8,0,0,0-8-8H130.67a8,8,0,0,1-4.8-1.6L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z" opacity="0.2"/><path d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
        category: 'Docs',
        fileCount: '17 Files',
        size: ' 432.39KB',
         bgProgress:'secondary',
         ProgressWidth:'58'
         
    },
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M69.77,112H208V88a8,8,0,0,0-8-8H130.67a8,8,0,0,1-4.8-1.6L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z" opacity="0.2"/><path d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
        category: 'Videos',
        fileCount: '437 Files',
        size: ' 3.12GB',
         bgProgress:'info',
         ProgressWidth:'90'
    },
    {   
        svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M69.77,112H208V88a8,8,0,0,0-8-8H130.67a8,8,0,0,1-4.8-1.6L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z" opacity="0.2"/><path d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
        category: 'Apps',
        fileCount: '165 Files',
        size: ' 12.56GB',
         bgProgress:'success',
         ProgressWidth:'32'
    },
  ]

  tableData = [
    {
        FileName:'VID-00292312-SPK823.mp4',
        Category:'Videos',
        Size :'87MB',
        Date :'22,Nov 2024',
        svg :' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" opacity="0.2"/><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
        SvgBg :'primary'
    },
    {
        FileName:'IMG-09123878-SPK734.jpeg',
        Category:'	Images',
        Size :'1.35MB',
        Date :'25,Nov 2024',
        SvgBg :'secondary ',
        svg :'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" opacity="0.2"/><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'

    },
    {
        FileName:'AMB-2012.zip',
        Category:'Archives',
        Size :'	422KB',
        Date :'23,Nov 2024',
        SvgBg :'success ',
        svg :'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,192h16a20,20,0,0,0,0-40H168v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="152" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="56 152 88 152 56 208 88 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'
    },
    {
        FileName:'AUD-1002-2012.mp3',
        Category:'Archives',
        Size :'422KB',
        Date :'23,Nov 2024',
        SvgBg :'orange ',
        svg :' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" opacity="0.2"/><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,152a32.5,32.5,0,0,1,0,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'

    },
    {
        FileName:'Document-02.pdf',
        Category:'Documents	',
        Size :'1.69MB',
        Date :'2,Dec 2024',
        SvgBg :'info ',
        svg :'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="216 152 184 152 184 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="184" x2="184" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,192H64a20,20,0,0,0,0-40H48v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M112,152v56h16a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'

    }
  ]

  fileCategories = [
    {
      title: 'Media',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <path d="M97.66,114.34,147.31,164h0L173,138.34a8,8,0,0,1,11.31,0L224,178.06V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V168.69l54.34-54.35A8,8,0,0,1,97.66,114.34Z" opacity="0.2"></path> <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect> <circle cx="156" cy="100" r="12"></circle> <path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> </svg>',
      iconColor: 'primary',
      fileCount: 2872,
      size: '35GB',
      bgColor: 'bg-light',
      borderColor: 'border-primary',
    },
    {
      title: 'Downloads',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2"></rect> <path d="M184,128h40a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <line x1="128" y1="24" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line> <polyline points="80 80 128 128 176 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline> <circle cx="188" cy="168" r="12"></circle> </svg>',
      iconColor: 'secondary',
      fileCount: 644,
      size: '34GB',
      bgColor: 'bg-light',
      borderColor: 'border-secondary',
    },
    {
      title: 'Apps',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <rect x="48" y="48" width="64" height="64" rx="8" opacity="0.2"></rect> <rect x="144" y="48" width="64" height="64" rx="8" opacity="0.2"></rect> <rect x="48" y="144" width="64" height="64" rx="8" opacity="0.2"></rect> <rect x="144" y="144" width="64" height="64" rx="8" opacity="0.2"></rect> <rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect> <rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect> <rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect> <rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect> </svg>',
      iconColor: 'success',
      fileCount: 64,
      size: '26GB',
      bgColor: 'bg-light',
      borderColor: 'border-success',
    },
    {
      title: 'Documents',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon> <path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline> </svg>',
      iconColor: 'info',
      fileCount: 3271,
      size: '29GB',
      bgColor: 'bg-light',
      borderColor: 'border-info',
    },
    {
      title: 'Audio',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon> <path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline> </svg>',
      iconColor: 'warning',
      fileCount: 5546,
      size: '72GB',
      bgColor: 'bg-light',
      borderColor: 'border-warning',
    }
  ];

  @ViewChild('myPond') myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here to Upload...',
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here to Upload...',
  };

  pondFiles: FilePond.FilePondOptions['files'] = [];

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }
}
