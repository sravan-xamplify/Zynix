import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { AttendanceChartData, EmployeesChartData1, EmployeesChartData2, EmployeesChartData3, EmployeesChartData4, WorkChartData } from '../../../shared/data/dashboard_chartData/hrmcharts.data';

import { CommonModule } from '@angular/common';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-hrm',
    imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule, SpkDropdownsComponent, NgbTooltipModule,
        SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, SpkSchoolCardComponent],
    templateUrl: './hrm.component.html',
    styleUrls: ['./hrm.component.scss']
})
export class HrmComponent  {
  public chartOptions1 = EmployeesChartData1;
  public chartOptions2 = EmployeesChartData2;
  public chartOptions3 = EmployeesChartData3;
  public chartOptions4 = EmployeesChartData4;
  public chartOptions5 = AttendanceChartData;
  public chartOptions6 = WorkChartData;

  LeaveColumn = [
    {
      header:'Employee'
    },
    {
      header:'Type'
    },
    {
      header:'Days'
    },
    {
      header:'Status'
    },
    {
      header:'Actions'
    },
  ]
  leaveRecords = [
    {
      avatar: "./assets/images/faces/2.jpg",
      name: "Socrates Itumay",
      position: "Team Lead",
      leaveType: "Sick Leave",
      duration: "2 Days",
      status: "Approved",
    },
    {
      avatar: "./assets/images/faces/4.jpg",
      name: "Samantha Paul",
      position: "Sr. UI Developer",
      leaveType: "Casual Leave",
      duration: "1 Day",
      status: "Pending",
    },
    {
      avatar: "./assets/images/faces/14.jpg",
      name: "Gray Noal",
      position: "Java Developer",
      leaveType: "Paternity Leave",
      duration: "5 Days",
      status: "Approved",
    },
    {
      avatar: "./assets/images/faces/15.jpg",
      name: "Gray Noal",
      position: "React Developer",
      leaveType: "Personal Leave",
      duration: "2 Days",
      status: "Rejected",
    },
    {
      avatar: "./assets/images/faces/16.jpg",
      name: "Pope Johnson",
      position: "Jr. Java Developer",
      leaveType: "Gifted Leave",
      duration: "2 Days",
      status: "Pending",
    },
  ];

  
  tableDataColumn = [
    {
      header:'S.No'
    },
    {
      header:'Employee Name'
    },
    {
      header:'Employee Id'
    },
    {
      header:'Designation'
    },
    {
      header:'Email'
    },
    {
      header:'Contact'
    },
    {
      header:'Salary'
    },
    {
      header:'Status'
    },
    {
      header:'Action'
    },

  ]

  tableData = [
    {
      id: "01",
      name: "Richard Dom",
      avatar: "./assets/images/faces/1.jpg",
      employeeId: "#Spt00120",
      position: "Team Leader",
      email: "richard116@demo.com",
      phone: "+0987654321",
      salary: "$15,000",
      status: "Active",
    },
    {
      id: "02",
      name: "Kakashra Sri",
      avatar: "./assets/images/faces/2.jpg",
      employeeId: "#Spt00121",
      position: "Web Developer",
      email: "Kakashra987@demo.com",
      phone: "+0986548761",
      salary: "$20,000",
      status: "Active",
    },
    {
      id: "03",
      name: "Nikki Jey",
      avatar: "./assets/images/faces/3.jpg",
      employeeId: "#Spt00122",
      position: "Project Manager",
      email: "Nikki654@demo.com",
      phone: "+0986548787",
      salary: "$25,000",
      status: "Active",
    },
    {
      id: "04",
      name: "Sasukey Ahuhi",
      avatar: "./assets/images/faces/4.jpg",
      employeeId: "#Spt00123",
      position: "Project Manager",
      email: "Sasukey986@demo.com",
      phone: "+0986548788",
      salary: "$30,000",
      status: "Active",
    },
    {
      id: "05",
      name: "Xiong Yu",
      avatar: "./assets/images/faces/5.jpg",
      employeeId: "#Spt00124",
      position: "UI Developer",
      email: "Xiongu987@demo.com",
      phone: "+0986548988",
      salary: "$35,000",
      status: "Active",
    }
  ]

  meetings = [
    { title: 'Lead Meeting', date: '03 Feb(9.00am-10.00am)', bgClass:'danger-transparent', icon: 'ri-vidicon-line fs-18',   button: true , btnTitle:'Join Now', buttonType: 'primary'},
    { title: 'Project Meeting', date: '04 Feb(9.00am-10.00am)', bgClass:'info-transparent', icon: 'ri-phone-line fs-18',  button: true , btnTitle:'Join Now', buttonType: 'light' },
    { title: 'Team Meeting', date: '05 Feb(9.00am-10.00am)', bgClass:'danger-transparent', icon: 'ri-vidicon-line fs-18',  button: true , btnTitle:'Join Now', buttonType: 'light' },
    { title: 'Client Meeting', date: '06 Feb(9.00am-10.00am)', bgClass:'info-transparent', icon: 'ri-phone-line fs-18',  button: true ,  btnTitle:'Join Now',buttonType: 'light' },
    { title: 'Client Meeting', date: '06 Feb(9.00am-10.00am)', bgClass:'info-transparent', icon: 'ri-phone-line fs-18',  button: true , btnTitle:'Join Now', buttonType: 'light' },
    { title: 'Project Meeting', date: '04 Feb(9.00am-10.00am)', bgClass:'info-transparent', icon: 'ri-phone-line fs-18',  button: true , btnTitle:'Join Now', buttonType: 'light' },
  ];

  pipelineItems = [
    { title: 'Total Applications',countBg:'primary',count: '1982', icon: 'ti ti-file-text fs-5', bgClass: 'primary-transparent avatar-rounded' },
    { title: 'Recruited', countBg:'secondary',count: '582', icon: 'ti ti-user-plus fs-5', bgClass: 'secondary-transparent avatar-rounded' },
    { title: 'Short Listed',countBg:'success', count: '395', icon: 'ti ti-clipboard-plus fs-5', bgClass: 'success-transparent avatar-rounded' },
    { title: 'Rejected',countBg:'warning', count: '905', icon: 'ti ti-file-x fs-5', bgClass: 'warning-transparent avatar-rounded' },
    { title: 'Blocked',countBg:'info', count: '582', icon: 'ti ti-file-off fs-5', bgClass: 'info-transparent avatar-rounded' },
    { title: 'Interviewed',countBg:'danger', count: '145', icon: 'ti ti-device-imac fs-5', bgClass: 'danger-transparent avatar-rounded' },
  ];

  timelineEvents = [
    { day: 15, month: 'Jun', title: "Join us in celebrating John Doe's birthday with cake in the break room at 3:00 PM", time: '10:00 AM', type: 'Birthday' },
    { day: 22, month: 'Jun', title: 'Office closed in observance of Independence Day. Enjoy your holiday!', time: '', type: 'Holiday' },
    { day: 10, month: 'Jul', title: 'Family-friendly event with games, food, and activities. A great opportunity for team building and relaxation.', time: '09:00 AM - 06:00 PM', type: 'Picnic' },
    { day: 18, month: 'Jul', title: 'National Holiday - Dolore Ipsum', time: '', type: 'Holiday' },
    { day: 5, month: 'Aug', title: "John's pup birthday - Team Member", time: '09:00 AM', type: 'Birthday' },
    { day: 20, month: 'Aug', title: 'Amet sed no dolor kasd - Et Dolores Tempor Erat', time: '04:00 PM', type: 'Announcement' },
  ];

  leaveRequests = [
    {
      avatar: './assets/images/faces/2.jpg',
      name: 'Sarah Taylor',
      leaveType: 'Casual Leave',
    },
    {
      avatar: './assets/images/faces/1.jpg',
      name: 'John Doe',
      leaveType: 'Vacation Leave',
    },
    {
      avatar: './assets/images/faces/3.jpg',
      name: 'Jane Smith',
      leaveType: 'Sick Leave',
    },
    {
      avatar: './assets/images/faces/10.jpg',
      name: 'Robert White',
      leaveType: 'Leave On Demand',
    },
    {
      avatar: './assets/images/faces/4.jpg',
      name: 'Emily Clark',
      leaveType: 'Casual Leave',
    },
    {
      avatar: './assets/images/faces/11.jpg',
      name: 'Alex Johnson',
      leaveType: 'Sick Leave',
    },
    {
      avatar: './assets/images/faces/5.jpg',
      name: 'William Smith',
      leaveType: 'Leave On Demand',
    },
  ];
  }


