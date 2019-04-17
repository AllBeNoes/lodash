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

describe('PHONE BUTTONS', () => {
    it('should make all letter combinations', () => {
        const res = utils.buttons(23);
        console.log(res);
    })

});