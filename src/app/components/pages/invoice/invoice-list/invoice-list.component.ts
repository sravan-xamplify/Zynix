import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpkInvoicelistCardComponent } from '../../../../@spk/spk-reusable-pages/spk-invoicelist-card/spk-invoicelist-card.component';
import { BounceRateData, ConversionRateData, ReviewChartData, SessionDurationData, TotalFollowersData } from '../../../../shared/data/dashboard_chartData/analyticscharts.data';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';



@Component({
    selector: 'app-invoice-list',
    imports: [SharedModule, NgbModule, RouterModule, CommonModule, SpkInvoicelistCardComponent, SpkReusableTablesComponent, SpkDropdownsComponent],
    templateUrl: './invoice-list.component.html',
    styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
 
  public counter1 = 1;
  source = interval(0.2);
  subscribe = this.source.subscribe(() => {
    this.counter1++;
    if (this.counter1 == 471) {
      this.subscribe.unsubscribe();
    }
  });
  public counter2 = 1;
  source2 = interval(0.2);
  subscribe2 = this.source2.subscribe(() => {
    this.counter2++;
    if (this.counter2 == 320) {
      this.subscribe2.unsubscribe();
    }
  });
  public counter3 = 1;
  source3 = interval(0.2);
  subscribe3 = this.source3.subscribe(() => {
    this.counter3++;
    if (this.counter3 == 81) {
      this.subscribe3.unsubscribe();
    }
  });
  public counter4 = 1;
  source4 = interval(0.2);
  subscribe4 = this.source4.subscribe(() => {
    this.counter4++;
    if (this.counter4 == 33) {
      this.subscribe4.unsubscribe();
    }
  });

  cards = [
    {
      title: 'Total Amount',
      amount: 471,
      unit: 'k',
      badgeText: '12,345',
      percentageChange: 18.21,
      percentageColor: 'text-success',
      trendIcon: 'ti ti-arrow-up',
      bgColorClass: 'bg-primary',
      iconPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z',
      chartOptions: TotalFollowersData
    },
    {
      title: 'Total Paid',
      amount: 122,
      unit: 'k',
      badgeText: '12,345',
      percentageChange: -12.61,
      percentageColor: 'text-danger',
      trendIcon: 'ti ti-arrow-down',
      bgColorClass: 'bg-danger',
      iconPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z',
      chartOptions : BounceRateData
    },
    {
      title: 'Pending Invoices',
      amount: 325,
      unit: '',
      badgeText: '12,345',
      percentageChange: 11.81,
      percentageColor: 'text-success',
      trendIcon: 'ti ti-arrow-up',
      bgColorClass: 'bg-success',
      iconPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z',
      chartOptions :ConversionRateData
    },
    {
      title: 'Overdue Invoices',
      amount: 236,
      unit: '',
      badgeText: '12,345',
      percentageChange: 13.65,
      percentageColor: 'text-danger',
      trendIcon: 'ti ti-arrow-up',
      bgColorClass: 'bg-danger',
      iconPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z',
      chartOptions :SessionDurationData 
    },
    {
      title: 'Paid Invoices',
      amount: 132,
      unit: '',
      badgeText: '12,345',
      percentageChange: 4.21,
      percentageColor: 'text-success',
      trendIcon: 'ti ti-arrow-up',
      bgColorClass: 'bg-success',
      iconPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z',
      chartOptions: ReviewChartData
    },
  ];

  deleteInvoice(index: number): void {
    // Remove the invoice from the array at the specified index
    this.Invoice.splice(index, 1);
  }

  InvoiceColumn = [
    {header:'Client'},
    {header:'Invoice ID'},
    {header:'Issued Date'},
    {header:'Amount'},
    {header:'Status'},
    {header:'Due Date'},
    {header:'Action'},
  ]

  Invoice = [
    {
      customerName: "Jack Miller",
      customerEmail: "jackmiller2416@gmail.com",
      invoiceNumber: "#SPK12032901",
      dateIssued: "25,Nov 2024",
      amount: "$212.45",
      status: "Paid",
      dueDate: "25,Dec 2024",
      avatar: "./assets/images/faces/11.jpg"
    },
    {
      customerName: "Suzika Stallone",
      customerEmail: "suzikastallone3214@gmail.com",
      invoiceNumber: "#SPK12032912",
      dateIssued: "13,Nov 2024",
      amount: "$512.99",
      status: "Pending",
      dueDate: "13,Dec 2024",
      avatar: "./assets/images/faces/7.jpg"
    },
    {
      customerName: "Roman Killon",
      customerEmail: "romankillon143@gmail.com",
      invoiceNumber: "#SPK12032945",
      dateIssued: "30,Nov 2024",
      amount: "$2199.49",
      status: "Overdue",
      dueDate: "30,Dec 2024",
      avatar: "./assets/images/faces/15.jpg"
    },
    {
      customerName: "Charlie Davieson",
      customerEmail: "charliedavieson@gmail.com",
      invoiceNumber: "#SPK12032922",
      dateIssued: "18,Nov 2024",
      amount: "$1569.99",
      status: "Paid",
      dueDate: "18,Dec 2024",
      avatar: "./assets/images/faces/12.jpg"
    },
    {
      customerName: "Selena Deoyl",
      customerEmail: "selenadeoyl114@gmail.com",
      invoiceNumber: "#SPK12032932",
      dateIssued: "18,Nov 2024",
      amount: "$4873.99",
      status: "Due By 1 Day",
      dueDate: "18,Dec 2024",
      avatar: "./assets/images/faces/4.jpg"
    },
    {
      customerName: "Kiara Advensh",
      customerEmail: "kiaraadvensh87@gmail.com",
      invoiceNumber: "#SPK12032978",
      dateIssued: "02,Nov 2024",
      amount: "$1923.99",
      status: "Paid",
      dueDate: "18,Dec 2024",
      avatar: "./assets/images/faces/7.jpg"
    },
    {
      customerName: "Joseph Samurai",
      customerEmail: "josephsamurai@gmail.com",
      invoiceNumber: "#SPK12032919",
      dateIssued: "15,Nov 2024",
      amount: "$1623.99",
      status: "Paid",
      dueDate: "15,Dec 2024",
      avatar: "./assets/images/faces/9.jpg"
    },
    {
      customerName: "Kevin Powell",
      customerEmail: "kevinpowell@gmail.com",
      invoiceNumber: "#SPK12032931",
      dateIssued: "21,Nov 2024",
      amount: "$3423.99",
      status: "Pending",
      dueDate: "21,Dec 2024",
      avatar: "./assets/images/faces/13.jpg"
    },
    {
      customerName: "Darla Jung",
      customerEmail: "darlajung555@gmail.com",
      invoiceNumber: "#SPK12032958",
      dateIssued: "15,Oct 2024",
      amount: "$2982.99",
      status: "Paid",
      dueDate: "15,Nov 2024",
      avatar: "./assets/images/faces/8.jpg"
    }
  ]
}