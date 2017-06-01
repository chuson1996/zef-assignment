export const monthlyPlans = [
  {
    name: 'Free',
    price: 0,
    noSurveys: 1,
    billingFrequency: 'monthly'
  },
  {
    name: 'Basic',
    price: 1,
    noSurveys: 10,
    billingFrequency: 'monthly'
  },
  {
    name: 'Pro',
    price: 10,
    noSurveys: 50,
    billingFrequency: 'monthly'
  },
  {
    name: 'Enterprise',
    price: NaN,
    noSurveys: Infinity,
    billingFrequency: 'monthly'
  }
];

export const annualPlans = [
  {
    name: 'Free',
    price: 0,
    noSurveys: 1,
    billingFrequency: 'annually',
  },
  {
    name: 'Basic',
    price: 11,
    noSurveys: 10,
    billingFrequency: 'annually',
    saving: 1,
  },
  {
    name: 'Pro',
    price: 108,
    noSurveys: 50,
    billingFrequency: 'annually',
    saving: 12
  },
  {
    name: 'Enterprise',
    price: NaN,
    noSurveys: Infinity,
    billingFrequency: 'annually'
  }
];
