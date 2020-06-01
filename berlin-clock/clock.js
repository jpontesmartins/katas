
// Tempo: +- 1h
// Demorei no teste de mesa

function berlinClock(s) {

    const time = s.split(":");
    const hour = time[0];
    const minutes = time[1];
    const seconds = time[2];

    //first row
    const firstRow = parseInt(hour / 5);

    let lightsFirstRow = "";
    for (let i = 0; i < firstRow; i++) {
        lightsFirstRow += "R"
    }

    let numberLightsOn = lightsFirstRow.length;

    let totalLights = 4 - numberLightsOn;
    if (numberLightsOn <= 4) {
        for (let i = 0; i < totalLights; i++) {
            lightsFirstRow += "O";

        }
    }
    // console.log(numberLightsOn);
    console.log(lightsFirstRow);


    //second row
    const secondRow = parseInt(hour % 5);

    let lightsSecondRow = "";
    for (let i = 0; i < secondRow; i++) {
        lightsSecondRow += "R";
    }

    numberLightsOn = lightsSecondRow.length;
    totalLights = 4 - numberLightsOn;

    if (numberLightsOn <= 4) {
        for (let i = 0; i < totalLights; i++) {
            lightsSecondRow += "O";
        }
    }

    // console.log(numberLightsOn);
    // console.log("lightsSecondRow");
    console.log(lightsSecondRow);

    const thirdRow = parseInt(minutes / 5);

    let lightsThirdRow = "";
    for (let i = 1; i <= thirdRow; i++) {
        if (i*5 == 15 || i*5 == 30 || i*5 == 45) {
            lightsThirdRow += "R";
        } else {
            lightsThirdRow += "Y";
        }
    }

    numberLightsOn = lightsThirdRow.length;
    totalLights = 11 - numberLightsOn;

    if (numberLightsOn <= 11) {
        for (let i = 0; i < totalLights; i++) {
            lightsSecondRow += "O";
        }
    }

    // console.log(numberLightsOn);
    // console.log("lightsThirdRow");
    console.log(lightsThirdRow);

    
    const forthRow = parseInt(minutes % 5);

    //forth row

    let lightsForthRow = "";
    for (let i = 0; i < forthRow; i++) {
        lightsForthRow += "Y";
    }

    numberLightsOn = lightsForthRow.length;
    totalLights = 4 - numberLightsOn;

    if (numberLightsOn <= 4) {
        for (let i = 0; i < totalLights; i++) {
            lightsForthRow += "O";
        }
    }

    console.log(lightsForthRow);

    const roundLight = (seconds % 2 === 0);
    
    let round = "";
    if (roundLight) {
        round += "Y";
    } else {
        round += "O";
    }

    console.log(round);

    const clockRows = [
        round,
        lightsFirstRow,
        lightsSecondRow,
        lightsThirdRow,
        lightsForthRow
    ].join("\n");

    return clockRows;
}


const output = berlinClock("12:56:01");

console.log("------------------");
console.log(output);



// console.log(output);

// const b = 56%5;
// console.log(parseInt(b));



