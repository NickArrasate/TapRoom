System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Keg;
    return {
        setters:[],
        execute: function() {
            Keg = (function () {
                // public pints: number = 124;
                function Keg(name, brand, price, abv) {
                    this.name = name;
                    this.brand = brand;
                    this.price = price;
                    this.abv = abv;
                }
                return Keg;
            }());
            exports_1("Keg", Keg);
        }
    }
});
//# sourceMappingURL=keg.model.js.map