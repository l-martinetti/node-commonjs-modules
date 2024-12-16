const printName = require("./names");
const printHobbies = require("./hobbies");


function printCard() {

    return {
        fullName: printName("Luca", "Martinetti"),
        hobbies: printHobbies("sci", "calcio", "pallavvolo")
    };
}

console.log(printCard());
