"use strict";
var Provider;
(function (Provider) {
    Provider[Provider["Payme"] = 0] = "Payme";
    Provider[Provider["Click"] = 1] = "Click";
    Provider[Provider["Uzum"] = 2] = "Uzum";
})(Provider || (Provider = {}));
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approvd"] = 1] = "Approvd";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.status = Status.Pending;
        this.craatedAt = new Date();
        this.updatedAt = new Date();
        this.providers = [];
    }
    getLifeTime() {
        return new Date().getTime() - this.craatedAt.getTime();
    }
    rejectPayment() {
        if (this.status === Status.Approvd) {
            throw new Error('Payment already approved, cannot be rejected.');
        }
        this.status = Status.Rejected;
        this.updatedAt = new Date();
    }
    getProviders(providerOrProviders) {
        if (typeof providerOrProviders === 'string') {
            this.providers.push(providerOrProviders);
        }
        else if (Array.isArray(providerOrProviders)) {
            this.providers = this.providers.concat(providerOrProviders);
        }
    }
}
const payme = new Payment(Provider.Payme);
payme.getProviders('Payme');
console.log(payme.providers); // ['Payme']
payme.getProviders(['Click', 'Uzum']);
console.log(payme.providers); // ['Payme', 'Click', 'Uzum']
