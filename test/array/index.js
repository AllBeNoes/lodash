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
                const mult = x * y;
                row.push(mult);
            }
            res.push(row);
        }
        return res
    },
    print(array, draw) {
        for (let i = 0; i < array.length; i++) {
            const row = array[i];
            draw(row.join("\t\t"));
        }
        draw();
        draw();
    },

    bldng(entrances, allFloors, roomsPerFloor) {
        const res = [];
        const roomsPerEntrance = roomsPerFloor * allFloors;
        const allRooms = roomsPerEntrance * entrances;

        for (let i = 0; i < allFloors; i++) {
            res.push([])
        }

        for (let i = 0; i < allRooms; i++) {
            const calcFloor = Math.floor((i % roomsPerEntrance) / roomsPerFloor);
            res[allFloors - 1 - calcFloor].push(i + 1)
        }


        return res;
    }


};

// for (let i = 0; i < flors*enterences + 1; i++) {
//     const row = [y];
//     for (let x = minX; x < maxX + 1; x++) {
//         const mult = x*y;
//         row.push(mult);
//     }
//     res.push(row);
// }
// return res
//
//
// 1  2  3|16 17 18
// 4  5  6|19 20 21
// 7  8  9|22 23 24
// 10 11 12|25 26 27
// 13 14 15|28 29 30
//
//     [[1, 2, 3, 16, 17, 18],
//     [4, 5, 6, 19, 20, 21],
//     [7, 8, 9, 22, 23, 24],
//     [10, 11, 12, 25, 26, 27],
//     [13, 14, 15, 28, 29, 30]]
//
// 5 fl, 2 ent, 3 RPF
//
//
//        add  remove  start  end
// push    X                   X
// pop           X             X
// unshift X             X
// shift         X       X

