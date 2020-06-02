
function conquer(map) {

    //unnoccupied island
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j] === 'u') {
                return [[i,j]];
            }
        }
    }

    //marines island
    let marinesIslands = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j] === 'm') {
                marinesIslands.push([i,j]);
            }
        }
    }

   
    marinesIslands.sort((a,b) => (a[0]+a[1])-(b[0]+b[1]));
    let island = marinesIslands[0];
    let smallestWeight = island[0] + island[1];

    let result = [];
    marinesIslands.map((island, i)=> {
        if (island[0]+island[1] === smallestWeight) {
            result.push(island);
        }
    });

    return result;

    // Conquer an unoccupied island.
    // If there are no unoccupied islands, conquer one of the marines' islands.
    // Conquer the island closest to any of our home islands (the p items / distances are computed as Manhattan distances).
}

module.exports = {
    conquer
}
