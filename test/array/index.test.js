const expect = require('expect');
const utils = require('./index');


describe('MULTIPLICATION TABLE', () => {
    it('should make multiplication table', () => {
        const res = utils.table(3,1,3,1);
        utils.print(res, console.log);
        // expect(res).toEqual([
        //
        // ]);
    });
});