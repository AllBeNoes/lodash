const _ = require('lodash');

function factorial(number) {
    let count = 0;
    count++;
    if (count >= 100) {
        return ("ITS TIME TO STOP")
    } else {
        if (number != 1) {
            return number * factorial(number - 1);
        } else {
            return number
        }
        return number;
    }
}

function mixer(arr1, arr2) {
    let res = [];

    if (arr1.length > 0) {
        if (arr2.length > 0) {
            for (let i1 = 0; i1 < arr1.length; i1++) {
                for (let i2 = 0; i2 < arr2.length; i2++) {
                    res.push([arr1[i1], arr2[i2]]);
                }
            }
        } else {
            res = arr1;
        }
    } else {
        if (arr2.length > 0) {
            res = arr2;
        } else {
            res = [];
        }
    }

    return res;
}


function decompose(num, k = 2, arr = [1]) {
    if (num < k) {
        return arr;
    } else {
        if (num % k == 0) {
            arr.push(k);
            decompose(num/k, k, arr);
        } else {
            decompose(num, k+1, arr);
        }
    }
    return arr;
}


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
    },

    factorial: factorial,

    mixer: mixer,

    buttons(number) {
        let res = [];
        let dig = 0;
        const num = _.map(_.split(number, ""), _.parseInt);
        const alph = [
            ["-"],
            ["-"],
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"],
            ["j", "k", "l"],
            ["m", "n", "o"],
            ["p", "q", "r", "s"],
            ["t", "u", "v"],
            ["w", "x", "y", "z"]
        ];

        _.forEach(num, function (dig) {
            res = mixer(res, alph[dig]);
        });

        res = _.flattenDeep(res);
        res = _.chunk(res, num.length);
        res = _.uniq(res);

        return res;

    },


    decompose: decompose
};


//        add  remove  start  end
// push    X                   X
// pop           X             X
// shift         X       X
// unshift X             X
