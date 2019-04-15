const _ = require('lodash');

module.exports = {
    table(maxX, minX, maxY, minY) {
        const res = [];

        const header = _.range(minX, maxX + 1);
        header.unshift('');
        res.push(header);

        for (let y = minY; y < maxY + 1; y++) {
            const row = [y];
            for (let x = minX; x < maxX + 1; x++) {
                const mult = x*y;
                row.push(mult);
            }
            res.push(row);
        }
        return res
    },
    print (array, draw) {
        for (let i = 0; i < array.length; i++) {
            const row = array[i];
            draw(row.join("\t\t"));
        }
    }
 };


//        add  remove  start  end
// push    X                   X
// pop           X             X
// unshift X             X
// shift         X       X

// .filter((item) => {
//     return item.favoriteFruit === favoriteFruit;
// })
//     .map((item) => {
//         return item.name;
//     })