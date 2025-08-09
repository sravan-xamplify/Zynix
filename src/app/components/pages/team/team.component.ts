import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SpkTeamCardComponent } from '../../../@spk/reusable-landing-card/spk-team-card/spk-team-card.component';

@Component({
    selector: 'app-team',
    imports: [SharedModule, NgSelectModule, NgbModule, CommonModule, SpkTeamCardComponent],
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Jessica White',
      role: 'Director',
      avatarClass: 'bg-primary-transparent',
      image: './assets/images/faces/team/1.png',
      roleClass: 'text-primary',
      skills: ['Design', 'Work', 'Illustration'],
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
      roleClass: 'text-secondary',
      skills: ['Team', 'Work', 'Meeting'],
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
      roleClass: 'text-success',
      skills: ['Design', 'Developing', 'Work'],
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
      skills: ['Mail', 'Work', 'Design'],
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Liam Nelson',
      role: 'Manager',
      avatarClass: 'bg-warning-transparent',
      image: './assets/images/faces/team/5.png',
      roleClass: 'text-warning',
      skills: ['Team', 'Work', 'Managing'],
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Grace Mitchell',
      role: 'Backend Developer',
      avatarClass: 'bg-danger-transparent',
      image: './assets/images/faces/team/6.png',
      roleClass: 'text-danger',
      skills: ['Developing', 'Work', 'Team'],
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Benjamin Adams',
      role: 'Designer',
      avatarClass: 'bg-purple-transparent',
      image: './assets/images/faces/team/7.png',
      roleClass: 'text-purple',
      skills: ['Design', 'UI/UX', 'Frontend'],
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    },
    {
      name: 'Olivia Martin',
      role: 'Team Lead',
      avatarClass: 'bg-teal-transparent',
      image: './assets/images/faces/team/8.png',
      roleClass: 'text-teal',
      skills: ['Team', 'Leader', 'Development'],
      socialLinks: [
        { color: 'primary', icon: 'ri-twitter-x-fill', link: 'https://twitter.com' },
        { color: 'secondary', icon: 'ri-facebook-fill', link: 'https://facebook.com' },
        { color: 'success', icon: 'ri-instagram-line', link: 'https://instagram.com' },
        { color: 'info', icon: 'ri-linkedin-fill', link: 'https://linkedin.com' }
      ]
    }
  ];
  

  }
