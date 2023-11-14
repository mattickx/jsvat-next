import { Country } from '../jsvat';

// https://abr.business.gov.au/Help/AbnFormat

export const australia: Country = {
  name: 'Australia',
  codes: ['AU', 'AUS', '036'],
  calcFn: (_vat: string): boolean => {
    const vat = String(_vat).replace('AU', '');
    let total = 0;

    const len = vat.length;
    for (let i: number = 0; i < len; i++) {
      let currentNumber = Number(vat.charAt(i));
      if (i === 0) currentNumber -= 1;
      total += currentNumber * australia.rules.multipliers.common[i];
    }

    return total > 0 && total % 89 === 0;
  },
  rules: {
    multipliers: {
      common: [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    },
    regex: [/^(AU){0,1}(\d{11})$/]
  }
};
