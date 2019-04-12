const expect = require('expect');
const { filterFavoriteFruit } = require('./index');
const data = require('../data.json');


describe('favoriteFruit', () => {
    it('should find bananas', () => {
        const res = filterFavoriteFruit(data, 'banana');
        expect(res).toEqual([
            "Garrett Hester",
            "Elaine Cooke",
            "Jarvis Melendez",
            "Denise Curtis",
            "Mariana Christensen",
            "Shirley Murphy"])
    });

    it('should find strawberry', () => {
        const res = filterFavoriteFruit(data, 'strawberry');
        expect(res).toEqual([
            "Foley Wong",
            "Hazel Lambert",
            "Valdez Compton",
            "Ann Hull",
            "Watts Newton",
            "Lenora Stanton"
            ])
    })

});