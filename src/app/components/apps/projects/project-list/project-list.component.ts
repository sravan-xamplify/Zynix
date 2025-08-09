import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpkProjectlistCardComponent } from '../../../../@spk/reusable-apps/spk-projectlist-card/spk-projectlist-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';


@Component({
    selector: 'app-project-list',
    imports: [SharedModule, NgSelectModule, FormsModule, NgbModule, RouterModule, CommonModule, SpkProjectlistCardComponent, SpkDropdownsComponent],
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  
  projectCards = [
    {
      title: "Total Projects",
      count: "12,432",
      avatarClass: "bg-primary shipping-icon",
      iconClass: "ri-briefcase-line",
      dropdownOptions: ["Week", "Day", "Year"]
    },
    {
      title: "New Projects",
      count: "12,432",
      avatarClass: "bg-secondary shipping-icon-1",
      iconClass: "ri-briefcase-line",
      dropdownOptions: ["Week", "Day", "Year"]
    },
    {
      title: "Completed Projects",
      count: "12,432",
      avatarClass: "bg-success shipping-icon-2",
      iconClass: "ri-briefcase-line",
      dropdownOptions: ["Week", "Day", "Year"]
    },
    {
      title: "On going Projects",
      count: "12,432",
      avatarClass: "bg-info shipping-icon-4",
      iconClass: "ri-briefcase-line",
      dropdownOptions: ["Week", "Day", "Year"]
    },
    {
      title: "In Review Projects",
      count: "12,432",
      avatarClass: "bg-warning shipping-icon-3",
      iconClass: "ri-briefcase-line",
      dropdownOptions: ["Week", "Day", "Year"]
    }
  ];


  projectTabCards = [
    {
      badge: "Web Design",
      badgeClass: "bg-primary-transparent",
      title: "E-commerce Platform Design",
      description: "A fully functional online store allowing users to browse products.",
      iconBackground: "bg-primary-transparent",
      iconClass: "ri-html5-fill",
      taskTitle: "HTML Design",
      tasksCompleted: "18/22",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "07, Dec 2024"
    },
    {
      badge: "Ui Testing",
      badgeClass: "bg-success-transparent",
      title: "Fitness Tracker App",
      description: "An app designed to track physical activities, monitor progress, and set fitness goals.",
      iconBackground: "bg-secondary-transparent",
      iconClass: "ri-window-fill",
      taskTitle: "User Interface Testing",
      tasksCompleted: "6/12",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/3.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/8.jpg" }
      ],
      dueDate: "12, Aug 2024"
    },
    {
      badge: "Data Science",
      badgeClass: "bg-secondary-transparent",
      title: "Customer Segmentation Analysis",
      description: "A data analysis project that segments customers based on purchasing behavior.",
      iconBackground: "bg-success-transparent",
      iconClass: "ri-database-2-fill",
      taskTitle: "Marketing Analytics",
      tasksCompleted: "09/32",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/1.jpg" },
        { src: "./assets/images/faces/7.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "24, Nov 2024"
    },
    {
      badge: "Development",
      badgeClass: "bg-warning-transparent",
      title: "Inventory Management System",
      description: "A software application for managing inventory levels, tracking stock.",
      iconBackground: "bg-info-transparent",
      iconClass: "ri-survey-fill",
      taskTitle: "Enterprise Resource Planning",
      tasksCompleted: "16/18",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/8.jpg" },
        { src: "./assets/images/faces/5.jpg" }
      ],
      dueDate: "15, Sept 2024"
    },
    {
      badge: "Sales",
      badgeClass: "bg-info-transparent",
      title: "Sales Forecasting Model",
      description: "A predictive model to forecast future sales based on historical data.",
      iconBackground: "bg-warning-transparent",
      iconClass: "ri-bubble-chart-fill",
      taskTitle: "Predictive Analytics",
      tasksCompleted: "12/45",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "11, Nov 2024"
    },
    {
      badge: "UI/UX Design",
      badgeClass: "bg-secondary-transparent",
      title: "Redesign of Checkout Process",
      description: "A project focused on improving the user experience of an online checkout process.",
      iconBackground: "bg-danger-transparent",
      iconClass: "ri-aed-electrodes-fill",
      taskTitle: "UX Design",
      tasksCompleted: "15/16",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/1.jpg" }
      ],
      dueDate: "21, Jan 2024"
    },
    {
      badge: "Cloud Computing",
      badgeClass: "bg-primary-transparent",
      title: "Cloud-Based File Storage System",
      description: "A system that provides secure cloud storage for files.",
      iconBackground: "bg-info-transparent",
      iconClass: "ri-cloud-fill",
      taskTitle: "Cloud Storage",
      tasksCompleted: "05/10",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "12, Feb 2024"
    },
    {
      badge: "Game Development",
      badgeClass: "bg-pink-transparent",
      title: "2D Platformer Game",
      description: "A side-scrolling platform game where players navigate levels.",
      iconBackground: "bg-teal-transparent",
      iconClass: "ri-discord-fill",
      taskTitle: "Game Development",
      tasksCompleted: "17/43",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "17, Aug 2024"
    },
    {
      badge: "Machine Learning",
      badgeClass: "bg-success-transparent",
      title: "Recommendation System",
      description: "A machine learning model that classifies images into different categories.",
      iconBackground: "bg-success-transparent",
      iconClass: "ri-mac-fill",
      taskTitle: "Computer Vision",
      tasksCompleted: "23/32",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/3.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/9.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "15, Oct 2024"
    },
    {
      badge: "Blockchain",
      badgeClass: "bg-secondary-transparent",
      title: "Cryptocurrency Wallet",
      description: "A secure wallet application for storing and managing cryptocurrencies.",
      iconBackground: "bg-primary-transparent",
      iconClass: "ri-equalizer-fill",
      taskTitle: "Blockchain/Fintech",
      tasksCompleted: "18/22",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "13, Jul 2024"
    }
  ];
  projectTabCards1 = [
   
    {
      badge: "UI/UX Design",
      badgeClass: "bg-secondary-transparent",
      title: "Redesign of Checkout Process",
      description: "A project focused on improving the user experience of an online checkout process.",
      iconBackground: "bg-danger-transparent",
      iconClass: "ri-aed-electrodes-fill",
      taskTitle: "UX Design",
      tasksCompleted: "15/16",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/1.jpg" }
      ],
      dueDate: "21, Jan 2024"
    },
    {
      badge: "Cloud Computing",
      badgeClass: "bg-primary-transparent",
      title: "Cloud-Based File Storage System",
      description: "A system that provides secure cloud storage for files.",
      iconBackground: "bg-info-transparent",
      iconClass: "ri-cloud-fill",
      taskTitle: "Cloud Storage",
      tasksCompleted: "05/10",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "12, Feb 2024"
    },
    {
      badge: "Game Development",
      badgeClass: "bg-pink-transparent",
      title: "2D Platformer Game",
      description: "A side-scrolling platform game where players navigate levels.",
      iconBackground: "bg-teal-transparent",
      iconClass: "ri-discord-fill",
      taskTitle: "Game Development",
      tasksCompleted: "17/43",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "17, Aug 2024"
    },
    {
      badge: "Machine Learning",
      badgeClass: "bg-success-transparent",
      title: "Recommendation System",
      description: "A machine learning model that classifies images into different categories.",
      iconBackground: "bg-success-transparent",
      iconClass: "ri-mac-fill",
      taskTitle: "Computer Vision",
      tasksCompleted: "23/32",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/3.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/9.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "15, Oct 2024"
    },
    {
      badge: "Blockchain",
      badgeClass: "bg-secondary-transparent",
      title: "Cryptocurrency Wallet",
      description: "A secure wallet application for storing and managing cryptocurrencies.",
      iconBackground: "bg-primary-transparent",
      iconClass: "ri-equalizer-fill",
      taskTitle: "Blockchain/Fintech",
      tasksCompleted: "18/22",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "13, Jul 2024"
    }
  ];
  projectTabCards2 = [
    {
      badge: "Cloud Computing",
      badgeClass: "bg-primary-transparent",
      title: "Cloud-Based File Storage System",
      description: "A system that provides secure cloud storage for files.",
      iconBackground: "bg-info-transparent",
      iconClass: "ri-cloud-fill",
      taskTitle: "Cloud Storage",
      tasksCompleted: "05/10",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "12, Feb 2024"
    },
    {
      badge: "Game Development",
      badgeClass: "bg-pink-transparent",
      title: "2D Platformer Game",
      description: "A side-scrolling platform game where players navigate levels.",
      iconBackground: "bg-teal-transparent",
      iconClass: "ri-discord-fill",
      taskTitle: "Game Development",
      tasksCompleted: "17/43",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "17, Aug 2024"
    },
    {
      badge: "Machine Learning",
      badgeClass: "bg-success-transparent",
      title: "Recommendation System",
      description: "A machine learning model that classifies images into different categories.",
      iconBackground: "bg-success-transparent",
      iconClass: "ri-mac-fill",
      taskTitle: "Computer Vision",
      tasksCompleted: "23/32",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/3.jpg" },
        { src: "./assets/images/faces/5.jpg" },
        { src: "./assets/images/faces/9.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "15, Oct 2024"
    },
    {
      badge: "Blockchain",
      badgeClass: "bg-secondary-transparent",
      title: "Cryptocurrency Wallet",
      description: "A secure wallet application for storing and managing cryptocurrencies.",
      iconBackground: "bg-primary-transparent",
      iconClass: "ri-equalizer-fill",
      taskTitle: "Blockchain/Fintech",
      tasksCompleted: "18/22",
      taskDetails: "tasks completed",
      avatars: [
        { src: "./assets/images/faces/2.jpg" },
        { src: "./assets/images/faces/8.jpg" },
        { count: "+2", class: "bg-primary" }
      ],
      dueDate: "13, Jul 2024"
    }
  ];
}
