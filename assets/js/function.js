// Random Number Generator Which will never repeat

function randomNum(addAlpha) {
    let alphaAZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let randomNum;

    if (addAlpha == "addAlpha") {
       return randomNum = alphaAZ[Math.floor(Math.random() * alphaAZ.length)] + Math.floor((new Date().getTime() * Math.random() / 92339393)) + alphaAZ[Math.floor(Math.random() * alphaAZ.length)];

    } else {
        return randomNum = Math.floor(new Date().getTime() * Math.random() / 92339393);
    }

}
// Check Whether any element has class
function hasClass(el,cl){
    if (el == null){return false}
    return (el.classList.contains(cl)) ? true : false
}

// For Developers

function incomeSort(income, currency) {

    if (income >= 999) {

        income = (income.toString().split(""));
        income.splice(1, 0, ".");
        income = Number(income.join("")).toFixed(1);

        return `${income}${currency}`;

    } else if (income <= 999) {

        return income + currency;
    }
}

// Add Disabled Attribute to Button Element
function setDisableAttr(elem) {
    elem.setAttribute("disabled","");
}

// Calculate GPA By Number

function gpaCalc(number) {

    if (number >= 0 && number <= 32) {
            return 0;
    } else if (number >= 33 && number <= 39) {
            return 1;
    } else if (number >= 40 && number <= 49) {
            return 2;
    } else if (number >= 50 && number <= 59) {
            return 3;
    } else if (number >= 60 && number <= 69) {
            return 3.5;
    } else if (number >= 70 && number <= 79) {
            return 4;
    } else if (number >= 80 && number <= 100) {
            return 5;
    } else {
            return null;
    }

}

/**
 * Set & Get Item from/in LS
 */

function setItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}