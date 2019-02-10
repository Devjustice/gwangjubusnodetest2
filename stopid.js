
'use strict';

let stopid = {
    key1: "2873",
    key2: "value2",
    key3: {
        subkey1: "subvalue1",
        subkey2: "subvalue2"
    }
};

module.exports =
        Object.freeze(stopid); // freeze prevents changes by users
