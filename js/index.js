
let text = [];
let activeMaj = false;
let activeShift = false;
let activeAlt = false;
let activeQwerty = false;
let activeNight = false;

let nb = document.getElementsByClassName("letter");
let btn = document.getElementsByTagName("button");

let accentG = false;

// for (let i = 0; i < 26; i++ ) {
//     let newKey = document.createElement("button");
//     let currentDiv = document.getElementById("keyboard");
//     document.body.insertBefore(newKey, currentDiv);
// }

function clickLetter(letter) {
    if (activeMaj) {
        document.getElementById("textZone").innerHTML += letter.toUpperCase();
        
        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('A')" class="letter">A</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('E')" class="letter">E</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('U')" class="letter">U</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('I')" class="letter">I</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('O')" class="letter">O</button>`;

    } else if (activeShift) {
        document.getElementById("textZone").innerHTML += letter.toUpperCase();
        activeShift = false;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("shift").classList.remove("active");

        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('e')" class="letter">e</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('u')" class="letter">u</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('i')" class="letter">i</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('o')" class="letter">o</button>`;
    } else {
        text += letter;
        console.log(letter);

        document.getElementById("textZone").innerHTML += letter;

        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('e')" class="letter">e</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('u')" class="letter">u</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('i')" class="letter">i</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('o')" class="letter">o</button>`;
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
        ['à','0','@'],
        [')','°',']'],
        ['=','+','}'],
        ['^','¨',''],
        ['$','£','¤'],
        ['ù','%',''],
        ['*','µ',''],
        [',','?',''],
        [';','.',''],
        [':','/',''],
        ['!','§','']
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
        if (pos === '6') {
            accentG = true;
            accentKeys();
        } else {
            document.getElementById("textZone").innerHTML += letterTab[pos][2];
            activeAlt = false;
            document.getElementById("alt").classList.remove("active");
        }

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

function enter() {
    document.getElementById("textZone").innerHTML += `<br>`;
}

function back() {
    let text = document.getElementById("textZone").innerHTML;
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

function accentKeys() {
    if (accentG) {
        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('à')" class="letter">à</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('è')" class="letter">è</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('ù')" class="letter">ù</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('ì')" class="letter">ì</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('ò')" class="letter">ò</button>`;
        accentG = false;
        alt();  
    }
}

function night() {
    if (activeNight) {
        document.getElementById("mod").href = "css/day.css"
        document.getElementById("nightBtn").innerHTML = 'JOUR';  
        activeNight = false;
    } else {
        document.getElementById("mod").href = "css/night.css"        
        document.getElementById("nightBtn").innerHTML = 'NUIT';  
        activeNight = true;
    }
}