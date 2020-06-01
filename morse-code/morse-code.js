
function decode(message) {
    const dictionary = getMorseCodeDictionary();
    const words = message.split("   ");

    let decodedMessage = "";
    words.map((word, i) => {
        const letters = word.split(" ");
        letters.map((letter, i) => {
            decodedMessage += dictionary.get(letter);
        });

        if (i < words.length-1) {
            decodedMessage += " ";
        }
    });

    return decodedMessage;

}

module.exports = {
    decode
}

function getMorseCodeDictionary() {
    const dictionary = new Map();
    dictionary.set(".-", "a");
    dictionary.set("-...", "b");
    dictionary.set("-.-.", "c");
    dictionary.set("-..", "d");
    dictionary.set(".", "e");
    dictionary.set("..-.", "f");
    dictionary.set("--.", "g");
    dictionary.set("....", "h");
    dictionary.set("..", "i");
    dictionary.set(".---", "j");
    dictionary.set("-.-", "k");
    dictionary.set(".-..", "l");
    dictionary.set("--", "m");
    dictionary.set("-.", "n");
    dictionary.set("---", "o");
    dictionary.set(".--.", "p");
    dictionary.set("--.-", "q");
    dictionary.set(".-.", "r");
    dictionary.set("...", "s");
    dictionary.set("-", "t");
    dictionary.set("..-", "u");
    dictionary.set("...-", "v");
    dictionary.set(".--", "w");
    dictionary.set("-..-", "x");
    dictionary.set("-.--", "y");
    dictionary.set("--..", "z");
    return dictionary;
}
