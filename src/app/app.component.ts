import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {monthlyPlans, annualPlans} from './plans';

type Plan = {
  name: string,
  price: number,
  noSurveys: number,
  billingFrequency: string,
  saving?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public plan = 'monthly';
  states = [
    'Finland',
    'Netherlands',
    'US'
  ];

  currentStep = 0;
  years = Array(20).fill(null).map((_, i) => 2017 - i).reverse();
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  steps = ['Choose plan', 'Company Info', 'Payment method', 'Pay'];
  pickedPlan: Plan;
  filteredPlans = {
    value: 'monthly'
  };
  fields = {
    name: '',
    country: '',
    zipCode: '',
    city: '',
    cardName: '',
    cardNumber: '',
    expiryMonth: NaN,
    expiryYear: NaN,
    cardCVC: '',
    cardCountry: '',
    cardCountryZipCode: ''
  };
  isNaN = Number.isNaN;
  isFinite = Number.isFinite;
  @ViewChild('customerForm') customerForm: NgForm;
  @ViewChild('billingForm') billingForm: NgForm;
  
  getAdjectiveOf(billingFrequency: string) {
    return billingFrequency === 'monthly' ? 'monthly' : 'annual';
  }
  capitalize(str: string) {
    const [firstChar, ...rest] = str.split('');
    return [firstChar.toUpperCase(), ...rest].join('');
  }
  monthlyPlans: [Plan] = <[Plan]>monthlyPlans;
  annualPlans: [Plan] = <[Plan]>annualPlans;

  choosePlan(plan: Plan) {
    this.pickedPlan = plan;
  }

  next() {
    if (this.currentStep === 1) {
      if (this.customerForm.valid) {
        this.currentStep++;
      }
      return;
    } else if (this.currentStep === 2) {
      if (this.billingForm.valid) {
        this.currentStep++;
      }

      return;
    }
    this.currentStep++;
  }

  confirm() {
    console.log(this.pickedPlan, this.fields);
  }
}
