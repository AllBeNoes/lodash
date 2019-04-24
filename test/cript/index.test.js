const expect = require('expect');
const utils = require('./index');

describe("SYMBOL'S NUMBER", () => {
    it("should find symbol's array number UNICODE", () => {
        const res = utils.symbNum('Aa1 ');
        expect(res).toEqual(
            [ 65, 97, 49, 32 ]
        )
    });
});

describe("NUMBER'S SYMBOL", () => {
   it("should find array number's symbol UNICODE", () => {
       const res = utils.numSymb([ 65, 97, 49, 32 ]);
       expect(res).toEqual(
           'Aa1 '
       )
   })
});

describe("SUM ARRAYS IN CIRCLE", () => {
    it("should sum elements from first array with elements from second array by circle", () => {
        const res = utils.arraysSum([1,2,3], [1,2]);
        expect(res).toEqual(
            [2,4,4]
        );
    })
});

describe("ENCODE STRING", () => {
   it("should encode string UNICODE by key", () => {
       const res = utils.encoder('Far far away, behind the word mountains, far from.', 'A wonderful serenity has taken');
       expect(res).toEqual(
           'éÔÅ×ÇìÍÔÊÖÒâÝ@ÜÉØ@ëÐÝÉ®ìÝâÅÎàÙ¡Ô×ËàØá§'
       );
   })
});

describe("NEGATE ARRAYS IN CIRCLE", () => {
    it("should negate elements from first array with elements from second array by circle", () => {
        const res = utils.negArray([2,4,4], [1,2]);
        expect(res).toEqual(
            [1,2,3]
        )
    })
});

describe("DECODE STRING", () => {
    it("should decode string UNICODE by key", () => {
        const res = utils.decoder('éÔÅ×ÇìÍÔÊÖÒâÝ@ÜÉØ@ëÐÝÉ®ìÝâÅÎàÙ¡Ô×ËàØá§', 'A wonderful serenity has taken');
        expect(res).toEqual(
            'Far far away, behind the word mountains, far from.'
        )
    })
});
