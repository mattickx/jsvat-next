System.register([], function (exports_1, context_1) {
    "use strict";
    var belgium;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("belgium", belgium = {
                name: 'Belgium',
                codes: ['BE', 'BEL', '056'],
                calcFn: (_vat) => {
                    const vat = String(_vat).replace('BE', '');
                    const check = 97 - (Number(vat.slice(0, 8)) % 97);
                    return check === Number(vat.slice(8, 10));
                },
                rules: {
                    multipliers: {},
                    regex: [/^(BE){1}([0-1]{1}\d{9})$/]
                    // regex: [/^(BE){0,1}([0-1]{1}\d{9})$/] // BE: Optional Country Code
                }
            });
        }
    };
});
