const doc = {
    oldalInput: document.querySelector('#oldal'),
    lapatloInput: document.querySelector('#lapatlo'),
    testatloInput: document.querySelector('#testatlo'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    lapatlo: 0,
    testatlo: 0
};

window.addEventListener('load', () => {
    init();
});

function init() {       //eseménykezelő
    if (calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc();
        });
    }
}

function startCalc() {
    let oldal = doc.oldalInput.value;
    let isValid = checkInput(oldal);

    if (isValid == true) {
        state.lapatlo = calcLapatlo(oldal);
        state.testatlo = calcTestatlo(oldal);
        doc.lapatloInput.value = state.lapatlo;
        doc.testatloInput.value = state.testatlo;
    }
    else {
        doc.lapatloInput.value = "Nem jó input lett megadva";
        doc.testatloInput.value = "Nem jó input lett megadva";
    }
}

function calcLapatlo(oldal) {    
    return oldal * Math.sqrt(2);
}

function calcTestatlo(oldal) {    
    return oldal * Math.sqrt(3);
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    //return inputStr.match(/^[0-9.]+$/);    // ezzel térünk vissza, a 0-9. a pont az jelenti, hogy elfogad pontot is nulla és kilenc között
    if (inputStr.match(/^[0-9.]+$/)) {
        if(inputNum > 0) {
            return true;
        } else {
        return false;
        }
    } else {
        return false;
    }
}