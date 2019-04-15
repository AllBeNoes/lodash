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
    },

    filterSex(data) {
        const male = _.chain(data)
            .filter((male) => {
                return male.gender === "male";
            })
            .map((male) => {
                return male.name;
            })
            .value();
        const female = _.chain(data)
            .filter((female) => {
                return female.gender === "female";
            })
            .map((female) => {
                return female.name;
            })
            .value();
        return {male: male, female: female}
    },

    filterTag(data) {
        return _.chain(data)
            .map((tag) => {
                return tag.tags;
            })
            .flatten(data)
            .uniq(data)
            .value();

    },

    countTag(data) {
        const res = _.chain(data)
            .map((tag) => {
                return tag.tags;
            })
            .flatten(data)
            .value();
        return _.chain(res)
            .reduce(function (counts, word) {
                counts[word] = (counts[word] || 0) + 1;
                return counts;
            }, {})
            .value();
    },

    sortAge(data) {
        return _.chain(data)
            .sortBy("age")
            .map((age) => {
                return age.name
            })
            .value();
    },

    sortFrnd(data) {
        return _.chain(data)
            .sortBy("friends")
            .map((frnd) => {
                return frnd.name;
            })
            .value()
    }

};