
function tune(frequencies) {

    if (frequencies[0] === 330 &&
        frequencies[1] === 247 &&
        frequencies[2] === 196 &&
        frequencies[3] === 146 &&
        frequencies[4] === 110 &&
        frequencies[5] === 82) {
        return "tuned";
    }

    let result = "";
    if (frequencies[0] !== 330) {
        result += "e:" + (330 - frequencies[0] + " ");
    }
    if (frequencies[1] !== 247) {
        result += "B:" + (247 - frequencies[1] + " ");
    }
    if (frequencies[2] !== 196) {
        result += "G:" + (196 - frequencies[2] + " ");
    }
    if (frequencies[3] !== 146) {
        result += "D:" + (146 - frequencies[3] + " ");
    }
    if (frequencies[4] !== 110) {
        result += "A:" + (110 - frequencies[4] + " ");
    }
    if (frequencies[5] !== 82) {
        result += "E:" + (82 - frequencies[5] + " ");
    }

    return result.trim();
}

module.exports = {
    tune
}

