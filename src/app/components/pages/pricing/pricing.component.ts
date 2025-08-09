import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpkPricingCardComponent } from '../../../@spk/spk-reusable-pages/spk-pricing-card/spk-pricing-card.component';
import { SpkPricingSwitchCardComponent } from '../../../@spk/spk-reusable-pages/spk-pricing-switch-card/spk-pricing-switch-card.component';

@Component({
    selector: 'app-pricing',
    imports: [SharedModule, NgbNavModule, CommonModule, FormsModule, SpkPricingCardComponent, SpkPricingSwitchCardComponent],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isYearly: boolean = false;
  
    onToggle() {
    }

    pricingPlans = [
      {
        title: 'Basic',
        description: 'Essential features for a magical start',
        price: '$9.99',
        perMonth: 'Per Month',
        additionalCost: '+20',
        planType: 'Current Plan',
        buttonText: 'Schedule a Demo',
        buttonClass: 'btn-secondary-light',
        bgColor:'secondary',
        iconPaths: [
          { d: 'M80,104V208H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8Z', opacity: '0.2' },
          { d: 'M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z' }
        ],
        features: [
          { name: 'Timeless Assistance', badge: 'On-demand', badgeClass: 'badge bg-secondary rounded-pill' },
          { name: 'Premium Experience' },
          { name: 'Fortress-Level Security', badge: 'Standard', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Instant Access' },
          { name: 'Infinite Updates' },
          { name: 'Risk-Free Trial', trialPeriod: '7 Days' },
          { name: 'Satisfaction Guarantee', trialPeriod: '30 Days' }
        ]
      },
      {
        title: 'Pro',
        description: 'Essential features for a magical start',
        price: '$19.99',
        perMonth: 'Per Month',
        additionalCost: '+20',
        planType: 'Recommended',
        buttonText: 'Schedule a Demo',
        buttonClass: 'btn-primary',
        bgColor:'primary',
        iconPaths: [
          { d: 'M128,48v80H40.87A146.29,146.29,0,0,1,40,112V56a8,8,0,0,1,8-8Zm0,80V232s78.06-21.3,87.13-104Z', opacity: '0.2' },
          { d: 'M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM120,220.55a130.85,130.85,0,0,1-30.93-18.74c-21.15-17.3-34.2-39.37-39-65.81H120ZM120,120H48.23c-.15-2.63-.23-5.29-.23-8l0-56h72Zm47.4,81.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42ZM208,112c0,2.71-.08,5.37-.23,8H136V56h72Z' }
        ],
        features: [
          { name: 'Timeless Assistance', badge: 'Live chat', badgeClass: 'badge bg-success rounded-pill' },
          { name: 'Premium Experience' },
          { name: 'Fortress-Level Security', badge: 'Standard', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Instant Access' },
          { name: 'Infinite Updates' },
          { name: 'Risk-Free Trial', trialPeriod: '7 Days' },
          { name: 'Satisfaction Guarantee', trialPeriod: '30 Days' }
        ]
      },
      {
        title: 'Premium',
        description: 'Pinnacle excellence, VIP support.',
        price: '$29.99',
        perMonth: 'Per Month',
        additionalCost: '+20',
        planType: 'New Plan',
        buttonText: 'Schedule a Demo',
        buttonClass: 'btn-success-light',
        bgColor:'success',
        iconPaths: [
          { d: 'M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z', opacity: '0.2' },
          { d: 'M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z' }
        ],
        features: [
          { name: 'Timeless Assistance', badge: '24/7 Support', badgeClass: 'badge bg-warning rounded-pill' },
          { name: 'Premium Experience' },
          { name: 'Fortress-Level Security', badge: 'Turbo', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Instant Access' },
          { name: 'Infinite Updates' },
          { name: 'Risk-Free Trial', trialPeriod: '14 Days' },
          { name: 'Satisfaction Guarantee', trialPeriod: '60 Days' }
        ]
      }
    ];

    pricingPlans1 = [
      {
        title: 'Basic',
        description: 'Next-level tools for advanced users',
        price: '$9.99',
        perMonth: 'Price Per Month',
        additionalCost: '+20/Person Per month',
        planType: 'Basic',
        buttonText: 'Start Today',
        buttonClass: 'btn-outline-primary',
        features: [
          { name: 'Unicorn Support', badge: 'On Demand', badgeClass: 'badge bg-secondary rounded-pill' },
          { name: 'Teleportation Technology' },
          { name: 'Gravity-Defying Speed', badge: 'New', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Quantum Leap Security' },
          { name: 'Infinite Updates' },
          { name: 'Free Trial', trialPeriod: '14 Days' },
          { name: 'Money-Back Guarantee', trialPeriod: '60 Days' },
        ],
        vatTax: '$10',
        total: '$29',
        isRecommended: false,
      },
      {
        title: 'Pro',
        description: 'Next-level tools for advanced users',
        price: '$19.99',
        perMonth: 'Price Per Month',
        additionalCost: '+20/Person Per month',
        planType: 'Recommended',
        buttonText: 'Start Today',
        buttonClass: 'btn-primary',
        features: [
          { name: 'Unicorn Support', badge: 'Live Chat', badgeClass: 'badge bg-success rounded-pill' },
          { name: 'Teleportation Technology' },
          { name: 'Gravity-Defying Speed', badge: 'Turbo', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Quantum Leap Security' },
          { name: 'Infinite Updates' },
          { name: 'Free Trial', trialPeriod: '14 Days' },
          { name: 'Money-Back Guarantee', trialPeriod: '60 Days' },
        ],
        vatTax: '$10',
        total: '$59',
        isRecommended: true,
      },
      {
        title: 'Premium',
        description: 'Next-level tools for advanced users',
        price: '$29.99',
        perMonth: 'Price Per Month',
        additionalCost: '+20/Person Per month',
        planType: 'Premium',
        buttonText: 'Start Today',
        buttonClass: 'btn-outline-primary',
        features: [
          { name: 'Unicorn Support', badge: '24/7 Support', badgeClass: 'badge bg-primary rounded-pill' },
          { name: 'Teleportation Technology' },
          { name: 'Gravity-Defying Speed', badge: 'New', badgeClass: 'badge bg-light text-default rounded-pill border' },
          { name: 'Quantum Leap Security' },
          { name: 'Infinite Updates' },
          { name: 'Free Trial', trialPeriod: '14 Days' },
          { name: 'Money-Back Guarantee', trialPeriod: '60 Days' },
        ],
        vatTax: '$10',
        total: '$99',
        isRecommended: false,
      },
    ];

    togglePrice() {
      // Update the price and perMonth/perYear label based on the toggle state
      this.pricingPlans1.forEach(plan => {
        if (this.isYearly) {
          plan.price = this.getYearlyPrice(plan.title);
          plan.perMonth = 'Price Per Year';
        } else {
          plan.price = this.getMonthlyPrice(plan.title);
          plan.perMonth = 'Price Per Month';
        }
      });
    }
  
    getMonthlyPrice(planTitle: string): string {
      // Logic for getting monthly price based on the plan title
      if (planTitle === 'Basic') return '$9.99';
      if (planTitle === 'Pro') return '$19.99';
      if (planTitle === 'Premium') return '$29.99';
      return '$0';
    }
  
    getYearlyPrice(planTitle: string): string {
      // Logic for getting yearly price based on the plan title
      if (planTitle === 'Basic') return '$99.99'; // Example yearly price for Basic plan
      if (planTitle === 'Pro') return '$199.99';  // Example yearly price for Pro plan
      if (planTitle === 'Premium') return '$299.99';  // Example yearly price for Premium plan
      return '$0';
    }

    activeTab: number = 1;

    pricingPlans2 = [
      {
        title: 'Starter',
        description: 'Starter Plan',
        monthlyPrice: '$9.99',
        yearlyPrice: '$49.99',
        monthlyLabel: '/ month',
        buttonText: 'Sign Up',
        buttonClass: 'btn-primary',
        titlebg:'primary',
        features: [
          { name: 'Drag and Drop Builder', value: '1'  },
          { name: 'No of Pages', value: '1' },
          { name: 'Search Functionality', value: 'Upto 5', badgeClass:'badge bg-secondary rounded-pill' },
          { name: 'Custom Forms', value: '3%' },
        ],
        iconClass: 'bg-primary-transparent svg-primary',
        iconPath: 'M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Z',
        bgColor: 'bg-primary-transparent',
      },
      {
        title: 'Growth Plan',
        description: 'Starter Plan',
        monthlyPrice: '$29.99',
        yearlyPrice: '$99.99',
        monthlyLabel: '/ month',
        buttonText: 'Sign Up',
        buttonClass: 'btn-secondary',
        titlebg:'secondary',
        features: [
          { name: 'Drag and Drop Builder', value: 'Unlimited' },
          { name: 'No of Pages', value: '1' },
          { name: 'Search Functionality', value: 'Upto 10', badgeClass:'badge bg-success rounded-pill' },
          { name: 'Custom Forms', value: '12%' },
        ],
        iconClass: 'bg-secondary-transparent svg-secondary',
        iconPath: 'M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84Z',
        bgColor: 'bg-secondary-transparent',
      },
      {
        title: 'Pro Plan',
        description: 'Starter Plan',
        monthlyPrice: '$49.99',
        yearlyPrice: '$99.99',
        monthlyLabel: '/ month',
        buttonText: 'Sign Up',
        buttonClass: 'btn-success',
        titlebg:'success',
        features: [
          { name: 'Drag and Drop Builder', value: 'Unlimited' },
          { name: 'No of Pages', value: 'Unlimited' },
          { name: 'Search Functionality', value: 'Upto 25' , badgeClass:'badge bg-info rounded-pill' },
          { name: 'Custom Forms', value: '6%' },
        ],
        iconClass: 'bg-success-transparent svg-success',
        iconPath: 'M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm89.6,0L128,202.46,91.82,112ZM96,96l32-42.67L160,96Zm85.42,16h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z',
        bgColor: 'bg-success-transparent',
      },
      {
        title: 'Pro Plan',
        description: 'Starter Plan',
        monthlyPrice: '$49.99',
        yearlyPrice: '$99.99',
        monthlyLabel: '/ month',
        buttonText: 'Sign Up',
        buttonClass: 'btn-info',
        titlebg:'info',
        features: [
          { name: 'Drag and Drop Builder', value: 'Unlimited' },
          { name: 'No of Pages', value: 'Unlimited' },
          { name: 'Search Functionality', value: 'Upto 25', badgeClass:'badge bg-primary rounded-pill' },
          { name: 'Custom Forms', value: '6%' },
        ],
        iconClass: 'bg-info-transparent svg-info',
        iconPath: 'M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm89.6,0L128,202.46,91.82,112ZM96,96l32-42.67L160,96Zm85.42,16h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z',
        bgColor: 'bg-info-transparent',
      }
    ];

    get displayedPlans() {
      // Adjust the price based on the active tab
      return this.pricingPlans2.map(plan => ({
        ...plan,
        price: this.activeTab === 1 ? plan.monthlyPrice : plan.yearlyPrice,
        priceLabel: this.activeTab === 1 ? '/ month' : '/ year'
      }));
    }
    

}
