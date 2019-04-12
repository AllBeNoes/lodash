const expect = require('expect');
const _ = require('./index');
const data = require('../data.json');


describe('favoriteFruit', () => {
    it('should find bananas', () => {
        const res = _.filterFavoriteFruit(data, 'banana');
        expect(res).toEqual([
            "Garrett Hester",
            "Elaine Cooke",
            "Jarvis Melendez",
            "Denise Curtis",
            "Mariana Christensen",
            "Shirley Murphy"])
    });

    it('should find strawberry', () => {
        const res = _.filterFavoriteFruit(data, 'strawberry');
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

describe('SEX', () => {
    it('should divide by sex', () => {
        const res = _.filterSex(data);
        expect(res).toEqual({
            male:
                [
                    'Clemons Love',
                    'Foley Wong',
                    'Garrett Hester',
                    'Valdez Compton',
                    'Jarvis Melendez',
                    'Watts Newton',
                    'Hancock Sims'
                ],
            female:
                [
                    'Elaine Cooke',
                    'Hazel Lambert',
                    'June Watts',
                    'Juanita Kaufman',
                    'Kitty Hart',
                    'Ann Hull',
                    'Lenora Stanton',
                    'Denise Curtis',
                    'Mariana Christensen',
                    'Shirley Murphy'
                ]
        })
    });
});

describe('TAGS', () => {
    it('should find tags', () => {
        const res = _.filterTag(data);
        expect(res).toEqual(
            [

                'nisi',
                'occaecat',
                'minim',
                'velit',
                'in',
                'culpa',
                'laboris',
                'consequat',
                'non',
                'do',
                'fugiat',
                'irure',
                'laborum',
                'nostrud',
                'incididunt',
                'adipisicing',
                'enim',
                'esse',
                'ex',
                'commodo',
                'pariatur',
                'reprehenderit',
                'officia',
                'labore',
                'tempor',
                'eiusmod',
                'exercitation',
                'duis',
                'sit',
                'ut',
                'qui',
                'ea',
                'aute',
                'mollit',
                'eu',
                'sunt',
                'est',
                'sint',
                'excepteur',
                'dolore',
                'ad',
                'aliquip',
                'magna',
                'et',
                'anim',
                'consectetur',
                'nulla',
                'veniam',
                'cillum',
                'Lorem',
                'amet',
                'quis'
            ]
        )
    })
});

describe('TAGS NUMBER', () => {
    it('should count tags', () => {
        const res = _.countTag(data);
        expect(res).toEqual(
            {
                nisi: 1,
                occaecat: 3,
                minim: 1,
                velit: 5,
                in: 2,
                culpa: 3,
                laboris: 2,
                consequat: 4,
                non: 2,
                do: 5,
                fugiat: 6,
                irure: 3,
                laborum: 1,
                nostrud: 3,
                incididunt: 1,
                adipisicing: 4,
                enim: 1,
                esse: 2,
                ex: 2,
                commodo: 3,
                pariatur: 4,
                reprehenderit: 5,
                officia: 1,
                labore: 2,
                tempor: 3,
                eiusmod: 3,
                exercitation: 1,
                duis: 2,
                sit: 2,
                ut: 5,
                qui: 5,
                ea: 2,
                aute: 3,
                mollit: 1,
                eu: 1,
                sunt: 2,
                est: 2,
                sint: 2,
                excepteur: 1,
                dolore: 2,
                ad: 1,
                aliquip: 3,
                magna: 1,
                et: 1,
                anim: 3,
                consectetur: 1,
                nulla: 1,
                veniam: 1,
                cillum: 1,
                Lorem: 1,
                amet: 1,
                quis: 1
            });
    })
});
