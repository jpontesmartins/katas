const pirates = require('./pirates');

describe('pirates', () => {
    it('marines: should return positions [1,3] and [2,2] for \'m\'', () => {

        const map = [
            ['~', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', 'p', 'm', '~', '~', '~', '~'],
            ['~', '~', 'm', 'p', '~', '~', '~', '~'],
            ['~', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', '~', '~', '~', 'm', '~', '~'],
            ['~', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', '~', 'm', '~', '~', '~', '~'],
            ['~', '~', '~', '~', '~', '~', '~', '~']];

        const unoccupiedIsland = pirates.conquer(map);

        expect(unoccupiedIsland).toEqual([[1, 3], [2, 2]]);
    });

    it('unnoccupied: should return positions [3,4] and [3,6] for \'u\'', () => {
        const map = [
            ['~', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', '~', '~', '~', '~', 'p', '~'],
            ['~', '~', '~', '~', '~', 'p', '~', 'm'],
            ['~', '~', '~', 'm', 'u', '~', 'u', '~'],
            ['~', '~', 'm', 'm', '~', '~', '~', '~'],
            ['u', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', '~', '~', '~', '~', '~', '~'],
            ['~', '~', '~', '~', 'm', '~', '~', '~']];


        const unoccupiedIsland = pirates.conquer(map);

        expect(unoccupiedIsland).toEqual([[3, 4], [3, 6]]);

    });


});