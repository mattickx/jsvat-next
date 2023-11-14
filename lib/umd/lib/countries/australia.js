(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.australia = void 0;
    // https://abr.business.gov.au/Help/AbnFormat
    exports.australia = {
        name: 'Australia',
        codes: ['AU', 'AUS', '036'],
        calcFn: (_vat) => {
            const vat = String(_vat).replace('AU', '');
            let total = 0;
            const len = vat.length;
            for (let i = 0; i < len; i++) {
                let currentNumber = Number(vat.charAt(i));
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
});
