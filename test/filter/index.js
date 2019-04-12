const _ = require('lodash');

module.exports = {
    filterFavoriteFruit(data, favoriteFruit) {
    return _.chain(data)
        .filter((item) => {
            return item.favoriteFruit === favoriteFruit;
        })
        .map((item) => {
                return item.name;
        })
        .value();
    }

};