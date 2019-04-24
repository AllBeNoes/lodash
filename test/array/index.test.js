const expect = require('expect');
const utils = require('./index');


describe('MULTIPLICATION TABLE', () => {
    it('should make multiplication table', () => {
        const res = utils.table(3, 1, 3, 1);
        utils.print(res, console.log);
        expect(res).toEqual([
            [
                "",
                1,
                2,
                3,
            ],
            [
                1,
                1,
                2,
                3
            ],
            [
                2,
                2,
                4,
                6
            ],
            [
                3,
                3,
                6,
                9
            ],
        ]);
    });
});

describe('BUILDING', () => {
    it('should make building table', () => {
        const res = utils.bldng(2, 5, 3);
        utils.print(res, console.log);
        expect(res).toEqual([
            [13, 14, 15, 28, 29, 30],
            [10, 11, 12, 25, 26, 27],
            [7, 8, 9, 22, 23, 24],
            [4, 5, 6, 19, 20, 21],
            [1, 2, 3, 16, 17, 18]
        ])
    });
});


describe('FACTORIAL', () => {
    it('should calculate factorial', () => {
        const res = utils.factorial(5);
        expect(res).toEqual(120);
    });
});

describe('MIXER', () => {
    it('should mix arrays', () => {
        const res = utils.mixer(["a", "b", "c"], ["c", "d"]);
        expect(res).toEqual(
            [
                ['a', 'c'],
                ['a', 'd'],
                ['b', 'c'],
                ['b', 'd'],
                ['c', 'c'],
                ['c', 'd']
            ]
        )
    });
});

describe('2 PHONE BUTTONS', () => {
        it('should make all letter combinations', () => {
            const res = utils.buttons(23);
            expect(res).toEqual(
                [ [ 'a', 'd' ],
                    [ 'a', 'e' ],
                    [ 'a', 'f' ],
                    [ 'b', 'd' ],
                    [ 'b', 'e' ],
                    [ 'b', 'f' ],
                    [ 'c', 'd' ],
                    [ 'c', 'e' ],
                    [ 'c', 'f' ] ]
            )
        })
});

describe('4 PHONE BUTTONS', () => {
    it('should make all letter combinations', () => {
        const res = utils.buttons(2317);
        expect(res).toEqual(
            [
                [ 'a', 'd', '-', 'p' ],
                [ 'a', 'd', '-', 'q' ],
                [ 'a', 'd', '-', 'r' ],
                [ 'a', 'd', '-', 's' ],
                [ 'a', 'e', '-', 'p' ],
                [ 'a', 'e', '-', 'q' ],
                [ 'a', 'e', '-', 'r' ],
                [ 'a', 'e', '-', 's' ],
                [ 'a', 'f', '-', 'p' ],
                [ 'a', 'f', '-', 'q' ],
                [ 'a', 'f', '-', 'r' ],
                [ 'a', 'f', '-', 's' ],
                [ 'b', 'd', '-', 'p' ],
                [ 'b', 'd', '-', 'q' ],
                [ 'b', 'd', '-', 'r' ],
                [ 'b', 'd', '-', 's' ],
                [ 'b', 'e', '-', 'p' ],
                [ 'b', 'e', '-', 'q' ],
                [ 'b', 'e', '-', 'r' ],
                [ 'b', 'e', '-', 's' ],
                [ 'b', 'f', '-', 'p' ],
                [ 'b', 'f', '-', 'q' ],
                [ 'b', 'f', '-', 'r' ],
                [ 'b', 'f', '-', 's' ],
                [ 'c', 'd', '-', 'p' ],
                [ 'c', 'd', '-', 'q' ],
                [ 'c', 'd', '-', 'r' ],
                [ 'c', 'd', '-', 's' ],
                [ 'c', 'e', '-', 'p' ],
                [ 'c', 'e', '-', 'q' ],
                [ 'c', 'e', '-', 'r' ],
                [ 'c', 'e', '-', 's' ],
                [ 'c', 'f', '-', 'p' ],
                [ 'c', 'f', '-', 'q' ],
                [ 'c', 'f', '-', 'r' ],
                [ 'c', 'f', '-', 's' ]
            ]
        )
    })
});

describe('DECOMPOSE', () => {
   it('should decompose numbers', () => {
       const res = utils.decompose(275);
       expect(res).toEqual(
           [ 1, 5, 5, 11 ]
       )
   })
});