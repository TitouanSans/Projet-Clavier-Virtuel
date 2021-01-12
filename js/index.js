
let text = [];
let activeMaj = false;
let activeShift = false;
let activeAlt = false;
let activeQwerty = false;

let nb = document.getElementsByClassName("letter");

// for (let i = 0; i < 26; i++ ) {
//     let newKey = document.createElement("button");
//     let currentDiv = document.getElementById("keyboard");
//     document.body.insertBefore(newKey, currentDiv);
// }

function clickLetter(letter) {
    if (activeMaj) {
        document.getElementById("textZone").innerHTML += letter.toUpperCase();

    } else if (activeShift) {
        document.getElementById("textZone").innerHTML += letter.toUpperCase();
        activeShift = false;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("shift").classList.remove("active");
    } else {
        text += letter;
        console.log(letter);

        document.getElementById("textZone").innerHTML += letter;
    };
}

function letterSpe(pos) {
    const letterTab = [
        ['&','1',''],
        ['é','2','~'],
        ['"','3','#'],
        ["'",'4','{'],
        ['(','5','['],
        ['-','6','|'],
        ['è','7','`'],
        ['_','8','\\'],
        ['ç','9','^'],
        ['à','0','@']
    ];

    if (activeMaj) {
        document.getElementById("textZone").innerHTML += letterTab[pos][1];

    } else if (activeShift) {
        document.getElementById("textZone").innerHTML += letterTab[pos][1];
        activeShift = false;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("shift").classList.remove("active");
    } else if (activeAlt) {
        document.getElementById("textZone").innerHTML += letterTab[pos][2];
        activeAlt = false;
        document.getElementById("alt").classList.remove("active");

    } else {
        document.getElementById("textZone").innerHTML += letterTab[pos][0];
    };
}

function maj() {

    if (activeMaj) {
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("maj").classList.remove("active");
        activeMaj = !activeMaj;
    } else {
        if (activeShift) {
            shift();
        }
        if (activeAlt) {
            alt();
        }

        document.getElementById("maj").classList.add("active");
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.add("uppercase");
        }
        activeMaj = !activeMaj;
    }

    console.log("MAJ : " + activeMaj);
}

function shift() {
    if (activeShift) {
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("shift").classList.remove("active");
        activeShift = false;
    } else {
        if (activeMaj) {
            maj();
        }
        if (activeAlt) {
            alt();
        }

        for (i = 0; i < nb.length; i++) {
            nb[i].classList.add("uppercase");
        }
        document.getElementById("shift").classList.add("active");
        activeShift = true;
    };

    console.log("Shift : " + activeShift);
}

function alt() {

    if (activeAlt) {
        document.getElementById("alt").classList.remove("active");
        activeAlt = false;

    } else {
        if (activeMaj) {
            maj();
        }
        if (activeShift) {
            shift();
        }
        document.getElementById("alt").classList.add("active");
        activeAlt = true;
    };

    console.log("Alt : " + activeAlt);
}

function back() {
    document.getElementById("textZone").innerHTML = text.slice(text, -1);
}

function erase() {
    document.getElementById("textZone").innerHTML = '';
}

function qwertySwitch() {

    if (activeQwerty) {
        if (activeMaj || activeShift) {
            document.getElementById("qwertyBtn").innerHTML = 'AZERTY';  
            document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('a')" class="letter uppercase">a</button>`;
            document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('z')" class="letter uppercase">z</button>`;
            document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('q')" class="letter uppercase">q</button>`;
            document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('w')" class="letter uppercase">w</button>`;
            activeQwerty = false;
        } else {
            document.getElementById("qwertyBtn").innerHTML = 'AZERTY';  
            document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
            document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('z')" class="letter">z</button>`;
            document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('q')" class="letter">q</button>`;
            document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('w')" class="letter">w</button>`;
            activeQwerty = false;
        }

    } else if (activeMaj || activeShift) {
        document.getElementById("qwertyBtn").innerHTML = 'QWERTY';
        document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('q')" class="letter uppercase">q</button>`;
        document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('w')" class="letter uppercase">w</button>`;
        document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('a')" class="letter uppercase">a</button>`;
        document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('z')" class="letter uppercase">z</button>`;
        activeQwerty = true;
    } else {
        document.getElementById("qwertyBtn").innerHTML = 'QWERTY';
        document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('q')" class="letter">q</button>`;
        document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('w')" class="letter">w</button>`;
        document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
        document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('z')" class="letter">z</button>`;
        activeQwerty = true;
    }
}