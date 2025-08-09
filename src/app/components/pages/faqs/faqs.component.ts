import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-faqs',
    imports: [SharedModule, NgbModule, CommonModule],
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  active = 1;
  constructor(private modalService: NgbModal){

  }
  modalpopup(PopoversModal: any) {
    this.modalService.open(PopoversModal, { centered: true });
  }
  tabs = [
    {
      id: 1,
      title: 'Order Placement',
      icon: 'ri-box-3-line fs-18',
      avatarBg:'primary',
      content: [
        { question: 'How do I place an order?', answer: 'You can place an order by selecting the items you wish to purchase, adding them to your cart, and proceeding to checkout.' },
        { question: 'Can I modify my order after placing it?', answer: 'Please contact customer support if you need to make changes after placing the order.' },
        { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, PayPal, and other online payment gateways.' },
        { question: 'How do I use a discount code or gift card?', answer: 'During checkout, you can enter your discount code or gift card number to apply it to your total.' }
      ]
    },
    {
      id: 2,
      title: 'Order Status',
      icon: 'ri-hourglass-line fs-18',
      avatarBg:'secondary',
      content: [
        { question: 'How can I check the status of my order?', answer: 'You can track your order using the tracking number sent to your email.' },
        { question: 'Can I reset a user\'s password as an administrator?', answer: 'Yes, as an administrator, you can reset a user\'s password from the admin panel.' },
        { question: 'Can I change my shipping address after placing the order?', answer: 'You may contact customer support to update your shipping address before the order is processed.' },
        { question: 'How can I request a return or refund?', answer: 'Please visit the "Returns and Refunds" section of our website for instructions on how to request a return.' }
      ]
    },
    {
      id: 3,
      title: 'Shipping and Delivery',
      icon: 'ri-truck-line fs-18',
      avatarBg:'success',
      content: [
        { question: 'How long will it take to receive my order?', answer: 'Delivery times vary based on your location and the shipping method selected. Estimated delivery times will be provided at checkout.' },
        { question: 'Can I track my shipment?', answer: 'Yes, once your order has been shipped, you will receive a tracking number via email. You can use this number to track your shipment through our courier’s website.' },
        { question: 'What shipping methods do you offer?', answer: 'We offer various shipping methods including standard, expedited, and express shipping.' },
        { question: 'Can I change my shipping address after the order has been shipped?', answer: 'Once the order has been shipped, we are unable to modify the shipping address. Please contact customer support for assistance.' }
      ]
    },
    {
      id: 4,
      title: 'Returns and Cancellations',
      icon: 'ri-close-circle-line fs-18',
      avatarBg:'warning',
      content: [
        { question: 'Can I cancel my order?', answer: 'Orders can be cancelled if they have not yet been processed. Please contact customer support as soon as possible to cancel your order.' },
        { question: 'How do I return an item?', answer: 'If you are not satisfied with your purchase, you can return it within the specified return period. Please visit our returns page for instructions on how to initiate a return.' },
        { question: 'Will I receive a refund for my cancelled order?', answer: 'Yes, if your order is cancelled, a refund will be issued to your original payment method.' },
        { question: 'What is your return policy?', answer: 'We accept returns within 30 days of the delivery date for most items, provided they are unused, in their original packaging, and with all tags attached.' }
      ]
    },
    {
      id: 5,
      title: 'Product and Pricing',
      icon: 'ri-price-tag-3-line fs-18',
      avatarBg:'info',
      content: [
        { question: 'Are all products available for immediate purchase?', answer: 'While most products are available for immediate purchase, some items may be on backorder or have limited stock. Availability will be indicated on the product page.' },
        { question: 'Do you offer discounts or promotions?', answer: 'Yes, we periodically offer discounts and promotions. Sign up for our newsletter or follow us on social media to stay informed about upcoming deals.' },
        { question: 'Do you offer customization or personalization options?', answer: 'Yes, we offer customization and personalization options for select products. You can find these options on the product page.' },
        { question: 'Can I request a sample before purchasing?', answer: 'For certain products, such as fabric swatches or paint samples, we offer sample requests. Please check the product page or contact our customer support team to inquire about sample availability.' }
      ]
    },
    {
      id: 6,
      title: 'Account and Privacy',
      icon: 'ri-settings-2-line fs-18',
      avatarBg:'danger',
      content: [
        { question: 'Do I need an account to place an order?', answer: 'You can place an order as a guest, but creating an account allows you to track orders, save shipping information, and access order history.' },
        { question: 'Is my payment information secure?', answer: 'Yes, we use industry-standard encryption to protect your payment information during checkout.' },
        { question: 'What should I do if I forget my password?', answer: 'Click the "Forgot Password" link on the login page, enter your registered email address, and we will send you instructions to reset your password.' },
        { question: 'How do I update my account information?', answer: 'Log in to your account, navigate to the "Account Settings" or "Profile" section, and update your information. Be sure to save your changes before exiting.' }
      ]
    }
  ];
}
