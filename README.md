[![Known Vulnerabilities](https://snyk.io/test/github/mathieumagalhaes/jsvat-next/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mathieumagalhaes/jsvat-next?targetFile=package.json)

<!-- [![Code Climate](https://codeclimate.com/github/mathieumagalhaes/jsvat-next/badges/gpa.svg)](https://codeclimate.com/github/mathieumagalhaes/jsvat-next)
[![Build Status](https://travis-ci.org/mathieumagalhaes/jsvat-next.svg?branch=master)](https://travis-ci.org/mathieumagalhaes/jsvat-next) -->

[![npm version](https://badge.fury.io/js/jsvat-next.svg)](http://badge.fury.io/js/jsvat-next)

<!-- [![devDependency Status](https://david-dm.org/mathieumagalhaes/jsvat-next/dev-status.svg)](https://david-dm.org/mathieumagalhaes/jsvat-next#info=devDependencies) -->

[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mathieumagalhaes/jsvat-next/blob/master/LICENSE)
[![NPM](https://nodei.co/npm/jsvat-next.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jsvat-next/)
[![Package Quality](http://npm.packagequality.com/badge/jsvat-next.png)](http://packagequality.com/#?package=jsvat-next)

## jsvat-next

A fork of https://github.com/se-panfilov/jsvat since it was unmaintained for over a year with open PR's that were important to add.

<!--
[[Demo and Examples]][2]

Check the validity of the format of an EU VAT number. No dependencies.
 -->

## What is it?

Small library to check validity VAT numbers (European + some others counties). ([learn more][1] about VAT)

- No dependencies;
- No http calls;
- 2-step checks: math + regexp;
- Tree-shakeable;
- Extendable;
- Separate checks for valid VAT and valid VAT format;
- Dynamically add/remove countries with which you want to check the VAT;
- Detecting possible country before you finish;
- Typescript;

## Installation

Installation:

```bash
npm i jsvat-next --save
```

(or `yarn add jsvat-next`)

For legacy versions (below v2.0.0) also possible: Bower: `bower i jsvat-next --save`

## Getting Started

```javascript
import { checkVAT, belgium, austria } from 'jsvat-next';

checkVAT('BE0411905847', [belgium]); // true: accept only Belgium VATs
checkVAT('BE0411905847', [belgium, austria]); // true: accept only Belgium or Austria VATs
checkVAT('BE0411905847', [austria]); // false: accept only Austria VATs
```

or

```javascript
import { checkVAT, countries } from 'jsvat-next';
('countries');
checkVAT('BE0411905847', countries); // check against all supported countries
```

to check against all supported countries

## Return value

`checkVAT()` returns `VatCheckResult` object:

```typescript
export interface VatCheckResult {
  value?: string; // 'BE0411905847': your VAT without extra characters (like '-', spaces, etc)
  isValid: boolean; // The main result. Indicates if VAT is correct against provided countries or not
  isValidFormat: boolean; // Indicates the validation of the format of VAT only. E.g. "BE0411905847" is a valid VAT, and "BE0897221791" is not. But they both has valid format, so "isValidFormat" will return "true"
  isSupportedCountry: boolean; // Indicates if "jsvat-next" could recognize the VAT. Sometimes you want to understand - if it's an invalid VAT from supported country or from an unknown one
  country?: {
    // VAT's country (null if not found). By "supported" I mean imported.
    name: string; // ISO country name of VAT
    isoCode: {
      // Country ISO codes
      short: string;
      long: string;
      numeric: string;
    };
  };
}
```

## List of supported Countries:

- Andorra
- Austria
- Belgium
- Brazil
- Bulgaria
- Switzerland
- Cyprus
- Czech Republic
- Germany
- Denmark
- Greece
- Spain
- Europe
- Estonia
- Finland
- France
- United Kingdom
- Croatia
- Hungary
- Ireland
- Italy
- Latvia
- Lithuania
- Luxembourg
- Malta
- Netherlands
- Norway
- Poland
- Portugal
- Romania
- Russia Federation
- Serbia
- Slovenia
- Slovakia republic
- Sweden

## How to import all countries at once?

```javascript
import { checkVAT, countries } from 'jsvat-next';
// const { checkVAT, countries } = require('jsvat-next');

checkVAT('WD12345678', countries);
```

## Extend countries list - add your own country:

You can add your own country.
In general `Country` should implement following structure:

```typescript
interface Country {
  name: string;
  codes: ReadonlyArray<string>;
  calcFn: (vat: string, options?: object) => boolean; //options - isn't a mandatory param
  rules: {
    multipliers: {}; // you can leave it empty
    regex: ReadonlyArray<RegExp>;
  };
}
```

Example:

```javascript
import { checkVAT } from 'jsvat-next';

export const wonderland = {
  name: 'Wonderland',
  codes: ['WD', 'WDR', '999'], // This codes should follow ISO standards (short, long and numeric), but it's your own business
  calcFn: (vat) => {
    return vat.length === 10;
  },
  rules: {
    regex: [/^(WD)(\d{8})$/]
  }
};

checkVAT('WD12345678', [wonderland]); // true
```

## About modules... ES6 / CommonJS / AMD / UMD / System

jsvat build includes `es6`, `commonjs`, `amd`, `umd` and `system` builds at the same time.

By default you will stick to `es6` version for browsers and build tools (webpack, etc):
which expects you to import it as

```javascript
import { checkVAT, belgium, austria } from 'jsvat-next';
```

Node.js automatically will pick up `CommonJS` version by default.
Means you could import it like:

```jsx harmony
// Modern Frontend and Node
const { checkVAT, belgium, austria } = require('jsvat-next');

// Node.js
const { checkVAT, belgium, austria } = require('jsvat-next');

// Legacy Frontend
<script src="whatever/jsvat-next/lib/umd/index.js"></script>;
```

Alternatively you can specify which module system you do want, e.g.:

```jsx harmony
// CommonJS (i.g nodejs)
const { checkVAT, belgium, austria } = require('jsvat-next/lib/commonjs');

// ES6
import { checkVAT, belgium, austria } from 'jsvat-next/lib/es6';

// UMD
<script src="whatever/jsvat-next/lib/umd/index.js"></script>;

// AMD
const { checkVAT, belgium, austria } = require('jsvat-next/lib/amd');

// System
import { checkVAT, belgium, austria } from 'jsvat-next/lib/system';
```

## How jsvat-next checks validity?

There is 2-step check:

1. Compare with list of Regexps;

For example regexp for austria is `/^(AT)U(\d{8})$/`.

Looks like `ATU99999999` is valid (it's satisfy the regexp), but actually it's should be invalid.

2. Some magic mathematical counting;

Here we make some mathematical calculation (different for each country).
After that we may be sure that `ATU99999999`and for example `ATV66889218` isn't valid, but `ATU12011204` is valid.

NOTE:
VAT numbers of some countries should ends up with special characters. Like '01' for Sweden or "L" for Cyprus.
If 100% real VAT doesn't fit, try to add proper appendix.

## Browsers Supports

Support only of evergreen browsers.

Legacy versions (below v2.0.0) supports all browsers down to IE9 (including IE9).

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Sergei Panfilov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[1]: https://en.wikipedia.org/wiki/VAT_identification_number

<!-- [2]: https://mathieumagalhaes.github.io/jsvat-next -->
