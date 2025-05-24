"use strict";
var website;
(function (website) {
    website["facebook"] = "https://www.facebook.com";
    website["twitter"] = "https://www.twitter.com";
    website["instagram"] = "https://www.instagram.com";
    website["youtube"] = "https://www.youtube.com";
})(website || (website = {}));
let person = {
    id: 1,
    name: 'Leanne Graham',
    isMarried: false,
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: 929983874,
        geo: [-37.3159, 81.1496],
    },
    phone: 17707368031,
    website: website.facebook,
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
    },
};
