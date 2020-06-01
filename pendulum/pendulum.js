
function pendulum(array) {
    array.sort((a,b) => a - b);

    let result = [];
    const centerIndex = parseInt((array.length-1)/2);
    result[centerIndex] = array[0];
    
    let pendulumModifier = 0;
    let nextIndex;
    for (let i = 1; i < array.length; i++) {
        if (i%2 !== 0) {
            pendulumModifier++;
            nextIndex = centerIndex + pendulumModifier;
            result[nextIndex] = array[i]; 
        } else {
            nextIndex = centerIndex - pendulumModifier;
            result[nextIndex] = array[i]; 
        }
    }

    return result;
}

module.exports = {
    pendulum
}


