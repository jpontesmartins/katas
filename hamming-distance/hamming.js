// it measures the minimum number of substitutions required to change one string into the other, 
// or the minimum number of errors that could have transformed one string into the other.

//


function hamming(stringA, stringB) {
    let distance = 0;
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            distance++;
        }

    }
    return distance;
}

module.exports = {
    hamming
}

