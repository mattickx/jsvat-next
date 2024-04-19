(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsvat = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countries = void 0;
var countries_1 = require("./lib/countries");
exports.countries = [
    countries_1.andorra,
    countries_1.australia,
    countries_1.austria,
    countries_1.belgium,
    countries_1.brazil,
    countries_1.bulgaria,
    countries_1.croatia,
    countries_1.cyprus,
    countries_1.czechRepublic,
    countries_1.denmark,
    countries_1.estonia,
    countries_1.europe,
    countries_1.finland,
    countries_1.france,
    countries_1.germany,
    countries_1.greece,
    countries_1.hungary,
    countries_1.ireland,
    countries_1.italy,
    countries_1.latvia,
    countries_1.lithuania,
    countries_1.luxembourg,
    countries_1.malta,
    countries_1.netherlands,
    countries_1.norway,
    countries_1.poland,
    countries_1.portugal,
    countries_1.romania,
    countries_1.russia,
    countries_1.serbia,
    countries_1.slovakiaRepublic,
    countries_1.slovenia,
    countries_1.spain,
    countries_1.sweden,
    countries_1.switzerland,
    countries_1.unitedKingdom
];
var countries_2 = require("./lib/countries");
Object.defineProperty(exports, "andorra", { enumerable: true, get: function () { return countries_2.andorra; } });
Object.defineProperty(exports, "australia", { enumerable: true, get: function () { return countries_2.australia; } });
Object.defineProperty(exports, "austria", { enumerable: true, get: function () { return countries_2.austria; } });
Object.defineProperty(exports, "belgium", { enumerable: true, get: function () { return countries_2.belgium; } });
Object.defineProperty(exports, "brazil", { enumerable: true, get: function () { return countries_2.brazil; } });
Object.defineProperty(exports, "bulgaria", { enumerable: true, get: function () { return countries_2.bulgaria; } });
Object.defineProperty(exports, "croatia", { enumerable: true, get: function () { return countries_2.croatia; } });
Object.defineProperty(exports, "cyprus", { enumerable: true, get: function () { return countries_2.cyprus; } });
Object.defineProperty(exports, "czechRepublic", { enumerable: true, get: function () { return countries_2.czechRepublic; } });
Object.defineProperty(exports, "denmark", { enumerable: true, get: function () { return countries_2.denmark; } });
Object.defineProperty(exports, "estonia", { enumerable: true, get: function () { return countries_2.estonia; } });
Object.defineProperty(exports, "europe", { enumerable: true, get: function () { return countries_2.europe; } });
Object.defineProperty(exports, "finland", { enumerable: true, get: function () { return countries_2.finland; } });
Object.defineProperty(exports, "france", { enumerable: true, get: function () { return countries_2.france; } });
Object.defineProperty(exports, "germany", { enumerable: true, get: function () { return countries_2.germany; } });
Object.defineProperty(exports, "greece", { enumerable: true, get: function () { return countries_2.greece; } });
Object.defineProperty(exports, "hungary", { enumerable: true, get: function () { return countries_2.hungary; } });
Object.defineProperty(exports, "ireland", { enumerable: true, get: function () { return countries_2.ireland; } });
Object.defineProperty(exports, "italy", { enumerable: true, get: function () { return countries_2.italy; } });
Object.defineProperty(exports, "latvia", { enumerable: true, get: function () { return countries_2.latvia; } });
Object.defineProperty(exports, "lithuania", { enumerable: true, get: function () { return countries_2.lithuania; } });
Object.defineProperty(exports, "luxembourg", { enumerable: true, get: function () { return countries_2.luxembourg; } });
Object.defineProperty(exports, "malta", { enumerable: true, get: function () { return countries_2.malta; } });
Object.defineProperty(exports, "netherlands", { enumerable: true, get: function () { return countries_2.netherlands; } });
Object.defineProperty(exports, "norway", { enumerable: true, get: function () { return countries_2.norway; } });
Object.defineProperty(exports, "poland", { enumerable: true, get: function () { return countries_2.poland; } });
Object.defineProperty(exports, "portugal", { enumerable: true, get: function () { return countries_2.portugal; } });
Object.defineProperty(exports, "romania", { enumerable: true, get: function () { return countries_2.romania; } });
Object.defineProperty(exports, "russia", { enumerable: true, get: function () { return countries_2.russia; } });
Object.defineProperty(exports, "serbia", { enumerable: true, get: function () { return countries_2.serbia; } });
Object.defineProperty(exports, "slovakiaRepublic", { enumerable: true, get: function () { return countries_2.slovakiaRepublic; } });
Object.defineProperty(exports, "slovenia", { enumerable: true, get: function () { return countries_2.slovenia; } });
Object.defineProperty(exports, "spain", { enumerable: true, get: function () { return countries_2.spain; } });
Object.defineProperty(exports, "sweden", { enumerable: true, get: function () { return countries_2.sweden; } });
Object.defineProperty(exports, "switzerland", { enumerable: true, get: function () { return countries_2.switzerland; } });
Object.defineProperty(exports, "unitedKingdom", { enumerable: true, get: function () { return countries_2.unitedKingdom; } });
var jsvat_1 = require("./lib/jsvat");
Object.defineProperty(exports, "checkVAT", { enumerable: true, get: function () { return jsvat_1.checkVAT; } });

},{"./lib/countries":19,"./lib/jsvat":39}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andorra = void 0;
exports.andorra = {
    name: 'Andorra',
    codes: ['AD', 'AND', '020'],
    calcFn: function (vat) {
        var firstLetter = vat.slice(0, 1).toUpperCase();
        var number = parseInt(vat.slice(1, 7), 10);
        if (vat.length !== 8) {
            return false;
        }
        if (!'ACDEFGLOPU'.includes(firstLetter)) {
            return false;
        }
        if (firstLetter === 'F' && number > 699999) {
            return false;
        }
        if ('AL'.includes(firstLetter) && number > 699999 && number < 800000) {
            return false;
        }
        return true;
    },
    rules: {
        multipliers: {},
        regex: [/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgoputFEALECDGOPUT]{1})$/]
    }
};

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.australia = void 0;
// https://abr.business.gov.au/Help/AbnFormat
exports.australia = {
    name: 'Australia',
    codes: ['AU', 'AUS', '036'],
    calcFn: function (_vat) {
        var vat = String(_vat).replace('AU', '');
        var total = 0;
        var len = vat.length;
        for (var i = 0; i < len; i++) {
            var currentNumber = Number(vat.charAt(i));
            if (i === 0)
                currentNumber -= 1;
            total += currentNumber * exports.australia.rules.multipliers.common[i];
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

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.austria = void 0;
exports.austria = {
    name: 'Austria',
    codes: ['AT', 'AUT', '040'],
    calcFn: function (vat) {
        var total = 0;
        for (var i = 0; i < 7; i++) {
            var temp = Number(vat.charAt(i)) * exports.austria.rules.multipliers.common[i];
            if (temp > 9) {
                total += Math.floor(temp / 10) + (temp % 10);
            }
            else {
                total += temp;
            }
        }
        total = 10 - ((total + 4) % 10);
        if (total === 10)
            total = 0;
        return total === Number(vat.slice(7, 8));
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1]
        },
        regex: [/^(AT)U(\d{8})$/]
    }
};

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.belgium = void 0;
exports.belgium = {
    name: 'Belgium',
    codes: ['BE', 'BEL', '056'],
    calcFn: function (_vat) {
        var vat = String(_vat).replace('BE', '');
        var check = 97 - (Number(vat.slice(0, 8)) % 97);
        return check === Number(vat.slice(8, 10));
    },
    rules: {
        multipliers: {},
        regex: [/^(BE){1}([0-1]{1}\d{9})$/]
        // regex: [/^(BE){0,1}([0-1]{1}\d{9})$/] // BE: Optional Country Code
    }
};

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brazil = void 0;
/**
 * Generate check sums. Multiply numbers to validators and sum them to generate
 * check sums, they're used to check if numbers are valid.
 * @param numbers - Numbers used to generate checkers.
 * @param validators - Validators used to generate checkers.
 */
var generateCheckSums = function (numbers, validators) {
    var initialCheckSums = [0, 0];
    return validators.reduce(function (_a, validator, index) {
        var checkerA = _a[0], checkerB = _a[1];
        return [index === 0 ? 0 : checkerA + numbers[index - 1] * validator, checkerB + numbers[index] * validator];
    }, initialCheckSums);
};
var isRepeatedArray = function (varNumbers) {
    return varNumbers.every(function (varNumber) { return varNumbers[0] === varNumber; });
};
/**
 * Get remaining of 11 or `0` if lower than 2.
 * @param value - Value used remaining.
 */
var getRemaining = function (value) { return (value % 11 < 2 ? 0 : 11 - (value % 11)); };
exports.brazil = {
    name: 'Brazil',
    codes: ['BR', 'BRA', '076'],
    calcFn: function (vat) {
        var numbers = vat.split('').map(Number);
        if (isRepeatedArray(numbers)) {
            return false;
        }
        var validators = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var checkers = generateCheckSums(numbers, validators);
        return numbers[12] === getRemaining(checkers[0]) && numbers[13] === getRemaining(checkers[1]);
    },
    rules: {
        multipliers: {},
        regex: [/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/]
    }
};

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulgaria = void 0;
exports.bulgaria = {
    name: 'Bulgaria',
    codes: ['BG', 'BGR', '100'],
    calcFn: function (vat) {
        if (vat.length === 9)
            return _checkNineLengthVat(vat);
        var multipliers = exports.bulgaria.rules.multipliers;
        return (_isPhysicalPerson(vat, multipliers.physical) ||
            _isForeigner(vat, multipliers) ||
            _miscellaneousVAT(vat, multipliers));
    },
    rules: {
        multipliers: {
            physical: [2, 4, 8, 5, 10, 9, 7, 3, 6],
            foreigner: [21, 19, 17, 13, 11, 9, 7, 3, 1],
            miscellaneous: [4, 3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(BG)(\d{9,10})$/]
    }
};
function _increase(value, vat, from, to, incr) {
    var result = value;
    for (var i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * (i + incr);
    }
    return result;
}
function _increase2(value, vat, from, to, multipliers) {
    var result = value;
    for (var i = from; i < to; i++) {
        result += Number(vat.charAt(i)) * multipliers[i];
    }
    return result;
}
function _checkNineLengthVat(vat) {
    var total;
    var temp = _increase(0, vat, 0, 8, 1);
    var expect = Number(vat.slice(8));
    total = temp % 11;
    if (total !== 10)
        return total === expect;
    temp = _increase(0, vat, 0, 8, 3);
    total = temp % 11;
    if (total === 10)
        total = 0;
    return total === expect;
}
function _isPhysicalPerson(vat, physicalMultipliers) {
    // 10 digit VAT code - see if it relates to a standard physical person
    if (/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(vat)) {
        // Check month
        var month = Number(vat.slice(2, 4));
        if ((month > 0 && month < 13) || (month > 20 && month < 33) || (month > 40 && month < 53)) {
            var total = _increase2(0, vat, 0, 9, physicalMultipliers);
            // Establish check digit.
            total = total % 11;
            if (total === 10)
                total = 0;
            // Check to see if the check digit given is correct, If not, try next type of person
            if (total === Number(vat.substr(9, 1)))
                return true;
        }
    }
    return false;
}
function _isForeigner(vat, multipliers) {
    // Extract the next digit and multiply by the counter.
    var total = _increase2(0, vat, 0, 9, multipliers.foreigner);
    // Check to see if the check digit given is correct, If not, try next type of person
    return total % 10 === Number(vat.substr(9, 1));
}
function _miscellaneousVAT(vat, multipliers) {
    // Finally, if not yet identified, see if it conforms to a miscellaneous VAT number
    var total = _increase2(0, vat, 0, 9, multipliers.miscellaneous);
    // Establish check digit.
    total = 11 - (total % 11);
    if (total === 10)
        return false;
    if (total === 11)
        total = 0;
    // Check to see if the check digit given is correct, If not, we have an error with the VAT number
    var expect = Number(vat.substr(9, 1));
    return total === expect;
}

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.croatia = void 0;
exports.croatia = {
    name: 'Croatia',
    codes: ['HR', 'HRV', '191'],
    calcFn: function (vat) {
        // Checks the check digits of a Croatian VAT number using ISO 7064, MOD 11-10 for check digit.
        var product = 10;
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        var expect = Number(vat.slice(10, 11));
        return (product + expect) % 10 === 1;
    },
    rules: {
        multipliers: {},
        regex: [/^(HR)(\d{11})$/]
    }
};

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cyprus = void 0;
exports.cyprus = {
    name: 'Cyprus',
    codes: ['CY', 'CYP', '196'],
    calcFn: function (vat) {
        // Not allowed to start with '12'
        if (Number(vat.slice(0, 2)) === 12)
            return false;
        // Extract the next digit and multiply by the counter.
        var total = extractAndMultiplyByCounter(vat, 0);
        // Establish check digit using modulus 26, and translate to char. equivalent.
        total = total % 26;
        total = String.fromCharCode(total + 65);
        // Check to see if the check digit given is correct
        var expect = vat.substr(8, 1);
        return total === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(CY)([0-59]\d{7}[A-Z])$/]
    }
};
function extractAndMultiplyByCounter(vat, total) {
    var result = total;
    for (var i = 0; i < 8; i++) {
        var temp = Number(vat.charAt(i));
        if (i % 2 === 0) {
            switch (temp) {
                case 0:
                    temp = 1;
                    break;
                case 1:
                    temp = 0;
                    break;
                case 2:
                    temp = 5;
                    break;
                case 3:
                    temp = 7;
                    break;
                case 4:
                    temp = 9;
                    break;
                default:
                    temp = temp * 2 + 3;
            }
        }
        result += temp;
    }
    return result;
}

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.czechRepublic = void 0;
exports.czechRepublic = {
    name: 'Czech Republic',
    codes: ['CZ', 'CZE', '203'],
    calcFn: function (vat) {
        var rules = exports.czechRepublic.rules;
        var multipliers = rules.multipliers, additional = rules.additional, lookup = rules.lookup;
        if (!additional)
            return false;
        return (isLegalEntities(vat, multipliers.common, additional) ||
            isIndividualType2(vat, multipliers.common, additional, lookup) ||
            isIndividualType3(vat, additional) ||
            isIndividualType1(vat, additional));
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        lookup: [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
        regex: [/^(CZ)(\d{8,10})(\d{3})?$/],
        additional: [/^\d{8}$/, /^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/, /^6\d{8}$/, /^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]
    }
};
function isLegalEntities(vat, multipliers, additional) {
    var total = 0;
    if (additional[0].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digit.
        total = 11 - (total % 11);
        if (total === 10)
            total = 0;
        if (total === 11)
            total = 1;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(7, 8));
        return total === expect;
    }
    return false;
}
function isIndividualType1(vat, additional) {
    if (additional[1].test(vat)) {
        return Number(vat.slice(0, 2)) <= 62;
    }
    return false;
}
function isIndividualType2(vat, multipliers, additional, lookup) {
    var total = 0;
    if (additional[2].test(vat)) {
        // Extract the next digit and multiply by the counter.
        for (var j = 0; j < 7; j++) {
            total += Number(vat.charAt(j + 1)) * multipliers[j];
        }
        // Establish check digit.
        var a = void 0;
        if (total % 11 === 0) {
            a = total + 11;
        }
        else {
            a = Math.ceil(total / 11) * 11;
        }
        var pointer = a - total - 1;
        // Convert calculated check digit according to a lookup table
        var expect = Number(vat.slice(8, 9));
        if (!lookup)
            return false;
        return lookup[pointer] === expect;
    }
    return false;
}
function isIndividualType3(vat, additional) {
    if (additional[3].test(vat)) {
        var temp = Number(vat.slice(0, 2)) +
            Number(vat.slice(2, 4)) +
            Number(vat.slice(4, 6)) +
            Number(vat.slice(6, 8)) +
            Number(vat.slice(8));
        var expect = Number(vat) % 11 === 0;
        return !!(temp % 11 === 0 && expect);
    }
    return false;
}

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.denmark = void 0;
exports.denmark = {
    name: 'Denmark',
    codes: ['DK', 'DNK', '208'],
    calcFn: function (vat) {
        var total = 0;
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.denmark.rules.multipliers.common[i];
        }
        return total % 11 === 0;
    },
    rules: {
        multipliers: {
            common: [2, 7, 6, 5, 4, 3, 2, 1]
        },
        regex: [/^(DK)(\d{8})$/]
    }
};

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estonia = void 0;
exports.estonia = {
    name: 'Estonia',
    codes: ['EE', 'EST', '233'],
    calcFn: function (vat) {
        var total = 0;
        var expect;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.estonia.rules.multipliers.common[i];
        }
        // Establish check digits using modulus 10.
        total = 10 - (total % 10);
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [3, 7, 1, 3, 7, 1, 3, 7]
        },
        regex: [/^(EE)(10\d{7})$/]
    }
};

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.europe = void 0;
exports.europe = {
    name: 'Europe',
    codes: ['EU', 'EUR', '000'],
    calcFn: function () {
        // We know little about EU numbers apart from the fact that the first 3 digits represent the
        // country, and that there are nine digits in total.
        return true;
    },
    rules: {
        multipliers: {},
        regex: [/^(EU)(\d{9})$/]
    }
};

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finland = void 0;
exports.finland = {
    name: 'Finland',
    codes: ['FI', 'FIN', '246'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++)
            total += Number(vat.charAt(i)) * exports.finland.rules.multipliers.common[i];
        // Establish check digit.
        total = 11 - (total % 11);
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(7, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [7, 9, 10, 5, 8, 4, 2]
        },
        regex: [/^(FI)(\d{8})$/]
    }
};

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.france = void 0;
exports.france = {
    name: 'France',
    codes: ['FR', 'FRA', '250'],
    calcFn: function (_vat) {
        var total;
        // Remove optianal memberstate
        var vat = String(_vat).split('|||')[0];
        if (!/^\d{11}$/.test(vat))
            return true;
        // Extract the last nine digits as an integer.
        total = Number(vat.substring(2));
        // Establish check digit.
        total = (total * 100 + 12) % 97;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(0, 2));
        return total === expect;
    },
    rules: {
        multipliers: {},
        regex: [
            // (\|{3}[A-Z0-9]{2}[0-9]{9})? added for optional member state specification
            /^(FR)(\d{11})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
            /^(FR)([A-HJ-NP-Z]\d{10})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
            /^(FR)(\d[A-HJ-NP-Z]\d{9})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
            /^(FR)([A-HJ-NP-Z]{2}\d{9})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/
        ]
    }
};

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.germany = void 0;
exports.germany = {
    name: 'Germany',
    codes: ['DE', 'DEU', '276'],
    calcFn: function (vat) {
        // Checks the check digits of a German VAT number.
        var product = 10;
        var sum = 0;
        var checkDigit = 0;
        var expect;
        for (var i = 0; i < 8; i++) {
            // Extract the next digit and implement peculiar algorithm!.
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Establish check digit.
        if (11 - product === 10) {
            checkDigit = 0;
        }
        else {
            checkDigit = 11 - product;
        }
        // Compare it with the last two characters of the VAT number. If the same, then it is a valid
        // check digit.
        expect = Number(vat.slice(8, 9));
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(DE)([1-9]\d{8})$/]
    }
};

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greece = void 0;
exports.greece = {
    name: 'Greece',
    codes: ['GR', 'GRC', '300'],
    calcFn: function (vat) {
        var total = 0;
        // eight character numbers should be prefixed with an 0.
        var newVat = vat.length === 8 ? '0' + vat : vat;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(newVat.charAt(i)) * exports.greece.rules.multipliers.common[i];
        }
        // Establish check digit.
        total = total % 11;
        total = total > 9 ? 0 : total;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(newVat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [256, 128, 64, 32, 16, 8, 4, 2]
        },
        regex: [/^(EL)(\d{9})$/]
    }
};

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hungary = void 0;
exports.hungary = {
    name: 'Hungary',
    codes: ['HU', 'HUN', '348'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * exports.hungary.rules.multipliers.common[i];
        }
        // Establish check digit.
        total = 10 - (total % 10);
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(7, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 7, 3, 1, 9, 7, 3]
        },
        regex: [/^(HU)(\d{8})$/]
    }
};

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var andorra_1 = require("./andorra");
Object.defineProperty(exports, "andorra", { enumerable: true, get: function () { return andorra_1.andorra; } });
var australia_1 = require("./australia");
Object.defineProperty(exports, "australia", { enumerable: true, get: function () { return australia_1.australia; } });
var austria_1 = require("./austria");
Object.defineProperty(exports, "austria", { enumerable: true, get: function () { return austria_1.austria; } });
var belgium_1 = require("./belgium");
Object.defineProperty(exports, "belgium", { enumerable: true, get: function () { return belgium_1.belgium; } });
var brazil_1 = require("./brazil");
Object.defineProperty(exports, "brazil", { enumerable: true, get: function () { return brazil_1.brazil; } });
var bulgaria_1 = require("./bulgaria");
Object.defineProperty(exports, "bulgaria", { enumerable: true, get: function () { return bulgaria_1.bulgaria; } });
var croatiat_1 = require("./croatiat");
Object.defineProperty(exports, "croatia", { enumerable: true, get: function () { return croatiat_1.croatia; } });
var cyprus_1 = require("./cyprus");
Object.defineProperty(exports, "cyprus", { enumerable: true, get: function () { return cyprus_1.cyprus; } });
var czechRepublic_1 = require("./czechRepublic");
Object.defineProperty(exports, "czechRepublic", { enumerable: true, get: function () { return czechRepublic_1.czechRepublic; } });
var denmark_1 = require("./denmark");
Object.defineProperty(exports, "denmark", { enumerable: true, get: function () { return denmark_1.denmark; } });
var estonia_1 = require("./estonia");
Object.defineProperty(exports, "estonia", { enumerable: true, get: function () { return estonia_1.estonia; } });
var europe_1 = require("./europe");
Object.defineProperty(exports, "europe", { enumerable: true, get: function () { return europe_1.europe; } });
var finland_1 = require("./finland");
Object.defineProperty(exports, "finland", { enumerable: true, get: function () { return finland_1.finland; } });
var france_1 = require("./france");
Object.defineProperty(exports, "france", { enumerable: true, get: function () { return france_1.france; } });
var germany_1 = require("./germany");
Object.defineProperty(exports, "germany", { enumerable: true, get: function () { return germany_1.germany; } });
var greece_1 = require("./greece");
Object.defineProperty(exports, "greece", { enumerable: true, get: function () { return greece_1.greece; } });
var hungary_1 = require("./hungary");
Object.defineProperty(exports, "hungary", { enumerable: true, get: function () { return hungary_1.hungary; } });
var ireland_1 = require("./ireland");
Object.defineProperty(exports, "ireland", { enumerable: true, get: function () { return ireland_1.ireland; } });
var italy_1 = require("./italy");
Object.defineProperty(exports, "italy", { enumerable: true, get: function () { return italy_1.italy; } });
var latvia_1 = require("./latvia");
Object.defineProperty(exports, "latvia", { enumerable: true, get: function () { return latvia_1.latvia; } });
var lithuania_1 = require("./lithuania");
Object.defineProperty(exports, "lithuania", { enumerable: true, get: function () { return lithuania_1.lithuania; } });
var luxembourg_1 = require("./luxembourg");
Object.defineProperty(exports, "luxembourg", { enumerable: true, get: function () { return luxembourg_1.luxembourg; } });
var malta_1 = require("./malta");
Object.defineProperty(exports, "malta", { enumerable: true, get: function () { return malta_1.malta; } });
var netherlands_1 = require("./netherlands");
Object.defineProperty(exports, "netherlands", { enumerable: true, get: function () { return netherlands_1.netherlands; } });
var norway_1 = require("./norway");
Object.defineProperty(exports, "norway", { enumerable: true, get: function () { return norway_1.norway; } });
var poland_1 = require("./poland");
Object.defineProperty(exports, "poland", { enumerable: true, get: function () { return poland_1.poland; } });
var portugal_1 = require("./portugal");
Object.defineProperty(exports, "portugal", { enumerable: true, get: function () { return portugal_1.portugal; } });
var romania_1 = require("./romania");
Object.defineProperty(exports, "romania", { enumerable: true, get: function () { return romania_1.romania; } });
var russia_1 = require("./russia");
Object.defineProperty(exports, "russia", { enumerable: true, get: function () { return russia_1.russia; } });
var serbia_1 = require("./serbia");
Object.defineProperty(exports, "serbia", { enumerable: true, get: function () { return serbia_1.serbia; } });
var slovakiaRepublic_1 = require("./slovakiaRepublic");
Object.defineProperty(exports, "slovakiaRepublic", { enumerable: true, get: function () { return slovakiaRepublic_1.slovakiaRepublic; } });
var slovenia_1 = require("./slovenia");
Object.defineProperty(exports, "slovenia", { enumerable: true, get: function () { return slovenia_1.slovenia; } });
var spain_1 = require("./spain");
Object.defineProperty(exports, "spain", { enumerable: true, get: function () { return spain_1.spain; } });
var sweden_1 = require("./sweden");
Object.defineProperty(exports, "sweden", { enumerable: true, get: function () { return sweden_1.sweden; } });
var switzerland_1 = require("./switzerland");
Object.defineProperty(exports, "switzerland", { enumerable: true, get: function () { return switzerland_1.switzerland; } });
var unitedKingdom_1 = require("./unitedKingdom");
Object.defineProperty(exports, "unitedKingdom", { enumerable: true, get: function () { return unitedKingdom_1.unitedKingdom; } });

},{"./andorra":2,"./australia":3,"./austria":4,"./belgium":5,"./brazil":6,"./bulgaria":7,"./croatiat":8,"./cyprus":9,"./czechRepublic":10,"./denmark":11,"./estonia":12,"./europe":13,"./finland":14,"./france":15,"./germany":16,"./greece":17,"./hungary":18,"./ireland":20,"./italy":21,"./latvia":22,"./lithuania":23,"./luxembourg":24,"./malta":25,"./netherlands":26,"./norway":27,"./poland":28,"./portugal":29,"./romania":30,"./russia":31,"./serbia":32,"./slovakiaRepublic":33,"./slovenia":34,"./spain":35,"./sweden":36,"./switzerland":37,"./unitedKingdom":38}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ireland = void 0;
exports.ireland = {
    name: 'Ireland',
    codes: ['IE', 'IRL', '372'],
    calcFn: function (vat) {
        var _a = exports.ireland.rules, typeFormats = _a.typeFormats, multipliers = _a.multipliers;
        if (!typeFormats || !typeFormats.first)
            return false;
        var total = 0;
        var newVat = vat;
        // If the code is type 1 format, we need to convert it to the new before performing the validation.
        if (typeFormats.first.test(vat)) {
            newVat = '0' + vat.substring(2, 7) + vat.substring(0, 1) + vat.substring(7, 8);
        }
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(newVat.charAt(i)) * multipliers.common[i];
        }
        // If the number is type 3 then we need to include the trailing A or H in the calculation
        if (typeFormats.third.test(newVat)) {
            // Add in a multiplier for the character A (1*9=9) or H (8*9=72)
            total += newVat.charAt(8) === 'H' ? 72 : 9;
        }
        // Establish check digit using modulus 23, and translate to char. equivalent.
        total = total % 23;
        total = total === 0 ? 'W' : String.fromCharCode(total + 64);
        // Compare it with the eighth character of the VAT number. If it's the same, then it's valid.
        var expect = newVat.slice(7, 8);
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        typeFormats: {
            first: /^\d[A-Z*+]/,
            third: /^\d{7}[A-Z][AH]$/
        },
        regex: [/^(IE)(\d{7}[A-W])$/, /^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/, /^(IE)(\d{7}[A-W][AH])$/]
    }
};

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.italy = void 0;
exports.italy = {
    name: 'Italy',
    codes: ['IT', 'ITA', '380'],
    calcFn: function (vat) {
        var total = 0;
        var temp;
        // The last three digits are the issuing office, and cannot exceed more 201, unless 999 or 888
        if (Number(vat.slice(0, 7)) === 0) {
            return false;
        }
        temp = Number(vat.slice(7, 10));
        if (temp < 1 || (temp > 201 && temp !== 999 && temp !== 888)) {
            return false;
        }
        // Extract the next digit and multiply by the appropriate
        for (var i = 0; i < 10; i++) {
            temp = Number(vat.charAt(i)) * exports.italy.rules.multipliers.common[i];
            if (temp > 9)
                total += Math.floor(temp / 10) + (temp % 10);
            else
                total += temp;
        }
        // Establish check digit.
        total = 10 - (total % 10);
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(10, 11));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
        },
        regex: [/^(IT)(\d{11})$/]
    }
};

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latvia = void 0;
exports.latvia = {
    name: 'Latvia',
    codes: ['LV', 'LVA', '428'],
    calcFn: function (vat) {
        var total = 0;
        // Differentiate between legal entities and natural bodies. For the latter we simply check that
        // the first six digits correspond to valid DDMMYY dates.
        if (/^[0-3]/.test(vat)) {
            return Boolean(/^[0-3][0-9][0-1][0-9]/.test(vat));
        }
        else {
            // Extract the next digit and multiply by the counter.
            for (var i = 0; i < 10; i++) {
                total += Number(vat.charAt(i)) * exports.latvia.rules.multipliers.common[i];
            }
            // Establish check digits by getting modulus 11.
            if (total % 11 === 4 && Number(vat[0]) === 9)
                total = total - 45;
            if (total % 11 === 4) {
                total = 4 - (total % 11);
            }
            else if (total % 11 > 4) {
                total = 14 - (total % 11);
            }
            else if (total % 11 < 4) {
                total = 3 - (total % 11);
            }
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            var expect = Number(vat.slice(10, 11));
            return total === expect;
        }
    },
    rules: {
        multipliers: {
            common: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6]
        },
        regex: [/^(LV)(\d{11})$/]
    }
};

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lithuania = void 0;
exports.lithuania = {
    name: 'Lithuania',
    codes: ['LT', 'LTU', '440'],
    calcFn: function (vat) {
        return _check9DigitVat(vat, exports.lithuania.rules) || _check12DigitVat(vat, exports.lithuania.rules);
    },
    rules: {
        multipliers: {
            short: [3, 4, 5, 6, 7, 8, 9, 1],
            med: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
            alt: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
        },
        check: /^\d{10}1/,
        regex: [/^(LT)(\d{9}|\d{12})$/]
    }
};
function _extractDigit(vat, multiplierList, key) {
    return Number(vat.charAt(key)) * multiplierList[key];
}
function _doubleCheckCalculation(vat, total, rules) {
    var result = total;
    if (result % 11 === 10) {
        result = 0;
        for (var i = 0; i < 8; i++) {
            result += _extractDigit(vat, rules.multipliers.short, i);
        }
    }
    return result;
}
function extractDigit(vat, total) {
    var result = total;
    for (var i = 0; i < 8; i++) {
        result += Number(vat.charAt(i)) * (i + 1);
    }
    return result;
}
function checkDigit(total) {
    var result = total % 11;
    if (result === 10) {
        result = 0;
    }
    return result;
}
function _check9DigitVat(vat, rules) {
    // 9 character VAT numbers are for legal persons
    var total = 0;
    if (vat.length === 9) {
        // 8th character must be one
        if (!/^\d{7}1/.test(vat))
            return false;
        // Extract the next digit and multiply by the counter+1.
        total = extractDigit(vat, total);
        // Can have a double check digit calculation!
        total = _doubleCheckCalculation(vat, total, rules);
        // Establish check digit.
        total = checkDigit(total);
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(8, 9));
        return total === expect;
    }
    return false;
}
function extractDigit12(vat, total, rules) {
    var result = total;
    for (var k = 0; k < 11; k++) {
        result += _extractDigit(vat, rules.multipliers.med, k);
    }
    return result;
}
function _doubleCheckCalculation12(vat, total, rules) {
    var result = total;
    if (total % 11 === 10) {
        result = 0;
        for (var l = 0; l < 11; l++) {
            result += _extractDigit(vat, rules.multipliers.alt, l);
        }
    }
    return result;
}
function _check12DigitVat(vat, rules) {
    var total = 0;
    // 12 character VAT numbers are for temporarily registered taxpayers
    if (vat.length === 12) {
        if (!rules.check)
            return false;
        // 11th character must be one
        if (!rules.check.test(vat))
            return false;
        // Extract the next digit and multiply by the counter+1.
        total = extractDigit12(vat, total, rules);
        // Can have a double check digit calculation!
        total = _doubleCheckCalculation12(vat, total, rules);
        // Establish check digit.
        total = checkDigit(total);
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(11, 12));
        return total === expect;
    }
    return false;
}

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luxembourg = void 0;
exports.luxembourg = {
    name: 'Luxembourg',
    codes: ['LU', 'LUX', '442'],
    calcFn: function (vat) {
        var expect = Number(vat.slice(6, 8));
        var checkDigit = Number(vat.slice(0, 6)) % 89;
        // Checks the check digits of a Luxembourg VAT number.
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(LU)(\d{8})$/]
    }
};

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.malta = void 0;
exports.malta = {
    name: 'Malta',
    codes: ['MT', 'MLT', '470'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 6; i++) {
            total += Number(vat.charAt(i)) * exports.malta.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 37.
        total = 37 - (total % 37);
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(6, 8));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [3, 4, 6, 7, 8, 9]
        },
        regex: [/^(MT)([1-9]\d{7})$/]
    }
};

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netherlands = void 0;
exports.netherlands = {
    name: 'Netherlands',
    codes: ['NL', 'NLD', '528'],
    calcFn: function (input) {
        var vat = input.replace(/[\ \-\_]/g, '').toUpperCase();
        var _a = exports.netherlands.rules, additional = _a.additional, multipliers = _a.multipliers;
        if (!additional)
            return false;
        var match = vat.match(additional[0]);
        if (!match || !match[1])
            return false;
        var numb = match[1];
        var characterValues = ("NL" + vat).split('').map(getCharValue);
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(numb.charAt(i)) * multipliers.common[i];
        }
        // Establish check digits by getting modulus 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(numb.slice(8, 9));
        // is either 11 proof or 97 mod proof.
        return total === expect || isNinetySevenMod(characterValues.join(''));
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(NL)(\d{9}B\d{2})$/],
        additional: [/^(\d{9})B\d{2}$/]
    }
};
function getCharValue(char) {
    // if one of these set values
    if (char === '+')
        return 36;
    if (char === '*')
        return 37;
    // if A...Z return code VAL -55
    var code = char.charCodeAt(0) - 55;
    if (code > 9 && code < 91)
        return code;
    return parseInt(char, 10);
}
function isNinetySevenMod(value) {
    var remainder = mod(value, 97);
    return remainder === 1;
}
// custom module function, to check module on values above Number limit
function mod(value, divisor) {
    // Initialize result
    var res = 0;
    for (var _i = 0, _a = value.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        res = (res * 10 + +char) % divisor;
    }
    return res;
}

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.norway = void 0;
exports.norway = {
    name: 'Norway',
    codes: ['NO', 'NOR', '578'],
    calcFn: function (vat) {
        var total = 0;
        // See https://www.brreg.no/en/about-us-2/our-tasks/all-our-registers/about-the-central-coordinating-register-for-legal-entities-ccr/about-the-organisation-number/
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.norway.rules.multipliers.common[i];
        }
        // Establish check digits by getting modulus 11. Check digits > 9 are invalid
        total = 11 - (total % 11);
        if (total === 11) {
            total = 0;
        }
        if (total < 10) {
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            var expect = Number(vat.slice(8, 9));
            return total === expect;
        }
        return false;
    },
    rules: {
        multipliers: {
            common: [3, 2, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^()(\d{9})MVA$/]
    }
};

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poland = void 0;
exports.poland = {
    name: 'Poland',
    codes: ['PL', 'POL', '616'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 9; i++) {
            total += Number(vat.charAt(i)) * exports.poland.rules.multipliers.common[i];
        }
        // Establish check digits subtracting modulus 11 from 11.
        total = total % 11;
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(9, 10));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [6, 5, 7, 2, 3, 4, 5, 6, 7]
        },
        regex: [/^(PL)(\d{10})$/]
    }
};

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portugal = void 0;
exports.portugal = {
    name: 'Portugal',
    codes: ['PT', 'PRT', '620'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.portugal.rules.multipliers.common[i];
        }
        // Establish check digits subtracting modulus 11 from 11.
        total = 11 - (total % 11);
        if (total > 9) {
            total = 0;
        }
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(8, 9));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [9, 8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(PT)(\d{9})$/]
    }
};

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romania = void 0;
exports.romania = {
    name: 'Romania',
    codes: ['RO', 'ROU', '642'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        var vatLength = vat.length;
        var multipliers = exports.romania.rules.multipliers.common.slice(10 - vatLength);
        for (var i = 0; i < vat.length - 1; i++) {
            total += Number(vat.charAt(i)) * multipliers[i];
        }
        // Establish check digits by getting modulus 11.
        total = (10 * total) % 11;
        if (total === 10)
            total = 0;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        var expect = Number(vat.slice(vat.length - 1, vat.length));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [7, 5, 3, 2, 1, 7, 5, 3, 2]
        },
        regex: [/^(RO)([1-9]\d{1,9})$/]
    }
};

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.russia = void 0;
exports.russia = {
    name: 'Russian Federation',
    codes: ['RU', 'RUS', '643'],
    calcFn: function (vat) {
        // See http://russianpartner.biz/test_inn.html for algorithm
        return _check10DigitINN(vat, exports.russia.rules) || _check12DigitINN(vat, exports.russia.rules);
    },
    rules: {
        multipliers: {
            m_1: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            m_2: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            m_3: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
        },
        regex: [/^(RU)(\d{10}|\d{12})$/]
    }
};
function _check10DigitINN(vat, rules) {
    var total = 0;
    if (vat.length === 10) {
        for (var i = 0; i < 10; i++) {
            total += Number(vat.charAt(i)) * rules.multipliers.m_1[i];
        }
        total = total % 11;
        if (total > 9) {
            total = total % 10;
        }
        // Compare it with the last character of the VAT number. If it is the same, then it's valid
        var expect = Number(vat.slice(9, 10));
        return total === expect;
    }
    return false;
}
function _check12DigitINN(vat, rules) {
    var total1 = 0;
    var total2 = 0;
    if (vat.length === 12) {
        for (var j = 0; j < 11; j++) {
            total1 += Number(vat.charAt(j)) * rules.multipliers.m_2[j];
        }
        total1 = total1 % 11;
        if (total1 > 9) {
            total1 = total1 % 10;
        }
        for (var k = 0; k < 11; k++) {
            total2 += Number(vat.charAt(k)) * rules.multipliers.m_3[k];
        }
        total2 = total2 % 11;
        if (total2 > 9) {
            total2 = total2 % 10;
        }
        // Compare the first check with the 11th character and the second check with the 12th and last
        // character of the VAT number. If they're both the same, then it's valid
        var expect = total1 === Number(vat.slice(10, 11));
        var expect2 = total2 === Number(vat.slice(11, 12));
        return expect && expect2;
    }
    return false;
}

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serbia = void 0;
exports.serbia = {
    name: 'Serbia',
    codes: ['RS', 'SRB', '688'],
    calcFn: function (vat) {
        // Checks the check digits of a Serbian VAT number using ISO 7064, MOD 11-10 for check digit.
        var product = 10;
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            // Extract the next digit and implement the algorithm
            sum = (Number(vat.charAt(i)) + product) % 10;
            if (sum === 0) {
                sum = 10;
            }
            product = (2 * sum) % 11;
        }
        // Now check that we have the right check digit
        var expect = 1;
        var checkDigit = (product + Number(vat.slice(8, 9))) % 10;
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(RS)(\d{9})$/]
    }
};

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slovakiaRepublic = void 0;
exports.slovakiaRepublic = {
    name: 'Slovakia Republic',
    codes: ['SK', 'SVK', '703'],
    calcFn: function (vat) {
        var expect = 0;
        var checkDigit = Number(vat) % 11;
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(SK)([1-9]\d[2346-9]\d{7})$/]
    }
};

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slovenia = void 0;
exports.slovenia = {
    name: 'Slovenia',
    codes: ['SI', 'SVN', '705'],
    calcFn: function (vat) {
        var total = 0;
        // Extract the next digit and multiply by the counter.
        for (var i = 0; i < 7; i++) {
            total += Number(vat.charAt(i)) * exports.slovenia.rules.multipliers.common[i];
        }
        // Establish check digits using modulus 11
        total = 11 - (total % 11);
        if (total === 10) {
            total = 0;
        }
        // Compare the number with the last character of the VAT number. If it is the
        // same, then it's a valid check digit.
        var expect = Number(vat.slice(7, 8));
        return !!(total !== 11 && total === expect);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(SI)([1-9]\d{7})$/]
    }
};

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spain = void 0;
exports.spain = {
    name: 'Spain',
    codes: ['ES', 'ESP', '724'],
    calcFn: function (vat) {
        var _a = exports.spain.rules, additional = _a.additional, multipliers = _a.multipliers;
        if (!additional)
            return false;
        // National juridical entities
        if (additional[0].test(vat))
            return isNationalJuridicalEntities(vat, multipliers.common);
        // Juridical entities other than national ones
        if (additional[1].test(vat))
            return isNonNationalJuridical(vat, multipliers.common);
        // Personal number (NIF) (starting with numeric of Y or Z)
        if (additional[2].test(vat))
            return isPersonalYtoZ(vat);
        // Personal number (NIF) (starting with K, L, M, or X)
        if (additional[3].test(vat))
            return isPersonalKtoX(vat);
        return false;
    },
    rules: {
        multipliers: {
            common: [2, 1, 2, 1, 2, 1, 2]
        },
        regex: [
            /^(ES)([A-Z]\d{8})$/,
            /^(ES)([A-HN-SW]\d{7}[A-J])$/,
            /^(ES)([0-9YZ]\d{7}[A-Z])$/,
            /^(ES)([KLMX]\d{7}[A-Z])$/
        ],
        additional: [/^[A-H|J|U|V]\d{8}$/, /^[A-H|N-S|W]\d{7}[A-J]$/, /^[0-9|Y|Z]\d{7}[A-Z]$/, /^[K|L|M|X]\d{7}[A-Z]$/]
    }
};
function extractDigitAndMultiplyByCounter(vat, multipliers, total) {
    var temp;
    var result = total;
    for (var i = 0; i < 7; i++) {
        temp = Number(vat.charAt(i + 1)) * multipliers[i];
        if (temp > 9) {
            result += Math.floor(temp / 10) + (temp % 10);
        }
        else {
            result += temp;
        }
    }
    return result;
}
function isNationalJuridicalEntities(vat, multipliers) {
    var total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - (total % 10);
    if (total === 10) {
        total = 0;
    }
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    var expect = Number(vat.slice(8, 9));
    return total === expect;
}
function isNonNationalJuridical(vat, multipliers) {
    var total = extractDigitAndMultiplyByCounter(vat, multipliers, 0);
    // Now calculate the check digit itself.
    total = 10 - (total % 10);
    var totalStr = String.fromCharCode(total + 64);
    // Compare it with the last character of the VAT number. If it's the same, then it's valid.
    var expect = vat.slice(8, 9);
    return totalStr === expect;
}
function isPersonalYtoZ(vat) {
    var tempNumber = vat;
    if (tempNumber.substring(0, 1) === 'Y')
        tempNumber = tempNumber.replace(/Y/, '1');
    if (tempNumber.substring(0, 1) === 'Z')
        tempNumber = tempNumber.replace(/Z/, '2');
    var expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(+tempNumber.substring(0, 8) % 23);
    return tempNumber.charAt(8) === expect;
}
function isPersonalKtoX(vat) {
    var expect = 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vat.substring(1, 8)) % 23);
    return vat.charAt(8) === expect;
}

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sweden = void 0;
exports.sweden = {
    name: 'Sweden',
    codes: ['SE', 'SWE', '752'],
    calcFn: function (vat) {
        var expect;
        // Calculate R where R = R1 + R3 + R5 + R7 + R9, and Ri = INT(Ci/5) + (Ci*2) modulo 10
        var R = 0;
        for (var i = 0; i < 9; i = i + 2) {
            var digit = Number(vat.charAt(i));
            R += Math.floor(digit / 5) + ((digit * 2) % 10);
        }
        // Calculate S where S = C2 + C4 + C6 + C8
        var S = 0;
        for (var j = 1; j < 9; j = j + 2) {
            S += Number(vat.charAt(j));
        }
        var checkDigit = (10 - ((R + S) % 10)) % 10;
        // Compare it with the last character of the VAT number. If it's the same, then it's valid.
        expect = Number(vat.slice(9, 10));
        return checkDigit === expect;
    },
    rules: {
        multipliers: {},
        regex: [/^(SE)(\d{10}01)$/]
    }
};

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switzerland = void 0;
exports.switzerland = {
    name: 'Switzerland',
    codes: ['CH', 'CHE', '756'],
    calcFn: function (vat) {
        var total = 0;
        for (var i = 0; i < 8; i++) {
            total += Number(vat.charAt(i)) * exports.switzerland.rules.multipliers.common[i];
        }
        // Establish check digit.s
        total = 11 - (total % 11);
        if (total === 10)
            return false;
        if (total === 11)
            total = 0;
        // Check to see if the check digit given is correct, If not, we have an error with the VAT number
        var expect = Number(vat.substr(8, 1));
        return total === expect;
    },
    rules: {
        multipliers: {
            common: [5, 4, 3, 2, 7, 6, 5, 4]
        },
        regex: [/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]
    }
};

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitedKingdom = void 0;
exports.unitedKingdom = {
    name: 'United Kingdom',
    codes: ['GB', 'GBR', '826', 'XI'],
    calcFn: function (vat) {
        // Government departments
        if (vat.substr(0, 2) === 'GD')
            return isGovernmentDepartment(vat);
        // Health authorities
        if (vat.substr(0, 2) === 'HA')
            return isHealthAuthorities(vat);
        // Standard and commercial numbers
        return isStandardOrCommercialNumber(vat, exports.unitedKingdom.rules.multipliers.common);
    },
    rules: {
        multipliers: {
            common: [8, 7, 6, 5, 4, 3, 2]
        },
        regex: [/^(GB)?(\d{9})$/, /^(GB)?(\d{12})$/, /^(XI)?(\d{9})$/, /^(GB)?(GD\d{3})$/, /^(GB)?(HA\d{3})$/]
    }
};
function isGovernmentDepartment(vat) {
    var expect = 500;
    return Number(vat.substr(2, 3)) < expect;
}
function isHealthAuthorities(vat) {
    var expect = 499;
    return Number(vat.substr(2, 3)) > expect;
}
function isStandardOrCommercialNumber(vat, multipliers) {
    var total = 0;
    // 0 VAT numbers disallowed!
    if (Number(vat.slice(0)) === 0)
        return false;
    // Check range is OK for modulus 97 calculation
    var no = Number(vat.slice(0, 7));
    // Extract the next digit and multiply by the counter.
    for (var i = 0; i < 7; i++) {
        total += Number(vat.charAt(i)) * multipliers[i];
    }
    // Old numbers use a simple 97 modulus, but new numbers use an adaptation of that (less 55). Our
    // VAT number could use either system, so we check it against both.
    // Establish check digits by subtracting 97 from total until negative.
    var checkDigit = total;
    while (checkDigit > 0) {
        checkDigit = checkDigit - 97;
    }
    // Get the absolute value and compare it with the last two characters of the VAT number. If the
    // same, then it is a valid traditional check digit. However, even then the number must fit within
    // certain specified ranges.
    checkDigit = Math.abs(checkDigit);
    if (checkDigit === Number(vat.slice(7, 9)) &&
        no < 9990001 &&
        (no < 100000 || no > 999999) &&
        (no < 9490001 || no > 9700000)) {
        return true;
    }
    // Now try the new method by subtracting 55 from the check digit if we can - else add 42
    if (checkDigit >= 55) {
        checkDigit = checkDigit - 55;
    }
    else {
        checkDigit = checkDigit + 42;
    }
    var expect = Number(vat.slice(7, 9));
    return Boolean(checkDigit === expect && no > 1000000);
}

},{}],39:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVAT = void 0;
var countries_1 = require("./countries");
function makeResult(vat, isValid, country) {
    return {
        value: vat || undefined,
        isValid: Boolean(isValid),
        isValidFormat: country ? isVatValidToRegexp(vat, country.rules.regex).isValid : false,
        isSupportedCountry: Boolean(country),
        country: !country
            ? undefined
            : {
                name: country.name,
                isoCode: {
                    short: country.codes[0],
                    long: country.codes[1],
                    numeric: country.codes[2]
                }
            }
    };
}
function removeExtraChars(vat) {
    if (vat === void 0) { vat = ''; }
    return vat
        .toString()
        .toUpperCase()
        .replace(/(\s|-|\.|\/)+/g, '');
}
function getCountryCodes(country) {
    return __spreadArrays(country.codes, [country.name === 'Greece' ? 'EL' : undefined]).filter(Boolean);
}
var countriesVATDoesNotStartWithCountryCode = [
    countries_1.australia.name,
    // belgium.name, // BE: Optional Country Code disabled
    countries_1.brazil.name,
    countries_1.norway.name
];
function isVATStartWithCountryCode(countryName) {
    return !countriesVATDoesNotStartWithCountryCode.includes(countryName);
}
function isVATStartWithNumber(vat) {
    return !!vat.match(/^\d{2}/);
}
function getCountry(vat, countriesList) {
    for (var _i = 0, countriesList_1 = countriesList; _i < countriesList_1.length; _i++) {
        var country = countriesList_1[_i];
        if (startsWithCode(vat, country) || (!isVATStartWithCountryCode(country.name) && isVATStartWithNumber(vat))) {
            return __assign({}, country);
        }
    }
    return undefined;
}
function startsWithCode(vat, country) {
    var countryCodes = getCountryCodes(country);
    return countryCodes.filter(function (code) { return vat.startsWith(code); }).length > 0;
}
function isVatValidToRegexp(vat, regexArr) {
    for (var _i = 0, regexArr_1 = regexArr; _i < regexArr_1.length; _i++) {
        var regex = regexArr_1[_i];
        var isValid = regex.test(vat);
        if (isValid)
            return { isValid: true, regex: regex };
    }
    return { isValid: false, regex: undefined };
}
function isVatValid(vat, country) {
    var regexpValidRes = isVatValidToRegexp(vat, country.rules.regex);
    if (!regexpValidRes.isValid || !regexpValidRes.regex)
        return false;
    var regexResult = regexpValidRes.regex.exec(vat);
    if (!regexResult)
        return false;
    return country.calcFn(regexResult[2]);
}
function checkVAT(vat, countriesList) {
    if (countriesList === void 0) { countriesList = []; }
    if (!vat)
        return makeResult(vat, false);
    var cleanVAT = removeExtraChars(vat);
    var country = getCountry(cleanVAT, countriesList);
    var isValid = country ? isVatValid(cleanVAT, country) : false;
    return makeResult(cleanVAT, isValid, country);
}
exports.checkVAT = checkVAT;

},{"./countries":19}]},{},[1])(1)
});
