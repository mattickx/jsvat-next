define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.france = void 0;
    exports.france = {
        name: 'France',
        codes: ['FR', 'FRA', '250'],
        calcFn: (_vat) => {
            let total;
            // Remove optianal memberstate
            const vat = String(_vat).split('|||')[0];
            if (!/^\d{11}$/.test(vat))
                return true;
            // Extract the last nine digits as an integer.
            total = Number(vat.substring(2));
            // Establish check digit.
            total = (total * 100 + 12) % 97;
            // Compare it with the last character of the VAT number. If it's the same, then it's valid.
            const expect = Number(vat.slice(0, 2));
            return total === expect;
        },
        rules: {
            multipliers: {},
            regex: [
                // (\|{3}[A-Z0-9]{2}[0-9]{9})? added for optional member state specification
                /^(FR)(\d{11})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
                /^(FR)([A-HJ-NP-Z]\d{10})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
                /^(FR)(\d[A-HJ-NP-Z]\d{9})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
                /^(FR)([A-HJ-NP-Z]{2}\d{9})(\|{3}[A-Z0-9]{2}[0-9]{9})?$/,
            ]
        }
    };
});
