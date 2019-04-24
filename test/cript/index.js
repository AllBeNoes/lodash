const _ = require('lodash');

function symbNum(string) {
    string = _.split(string, "");
    const res = _.map(string, (letter) => {
        return letter.charCodeAt();
    })

    return res;
}

function numSymb(arr) {
    let res = '';
    let pre = [];

    for (i = 0; i < arr.length; i++) {
        pre.push(String.fromCharCode(arr[i]));
    }

    res = _.join(pre, '');

    return res;

}

function sumArray(arr1, arr2, res = [], i = 0, j = 0) {

    if (i < arr1.length) {
        if (j < arr2.length) {
            res.push(arr1[i] + arr2[j]);
            sumArray(arr1, arr2, res, i + 1, j + 1)
        } else {
            sumArray(arr1, arr2, res, i)
        }
    } else {
        return res;
    }

    return res;
}

function negArray (arr1, arr2, res = [], i = 0, j = 0) {
    if (i < arr1.length) {
        if (j < arr2.length) {
            res.push(arr1[i] - arr2[j]);
            negArray(arr1, arr2, res, i + 1, j + 1)
        } else {
            negArray(arr1, arr2, res, i)
        }
    } else {
        return res;
    }
    return res;
}


module.exports = {

    symbNum: symbNum,

    numSymb: numSymb,

    arraysSum: sumArray,

    encoder(message, key) {
        const num1 = symbNum(message);
        const num2 = symbNum(key);
        const numFin = sumArray(num1, num2);
        return numSymb(numFin);
    },

    negArray: negArray,

    decoder(message, key) {
        const num1 = symbNum(message);
        const num2 = symbNum(key);
        const numFin = negArray(num1, num2);
        return numSymb(numFin);
    }
};