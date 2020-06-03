
function conquer(map) {

    //unnoccupied island
    let unnoccupiedIslands = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j] === 'u') {
                unnoccupiedIslands.push([i,j])
            }
        }
    }

    if (unnoccupiedIslands.length > 0) {
        const justTwoIslands = unnoccupiedIslands.slice(0,2);
        return justTwoIslands;
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

}

module.exports = {
    conquer
}
