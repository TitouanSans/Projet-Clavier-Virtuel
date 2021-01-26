
let text = [];
let activeMaj = false;
let activeShift = false;
let activeAlt = false;
let activeQwerty = false;
let activeNight = false;

let nb = document.getElementsByClassName("letter");
let btn = document.getElementsByTagName("button");

let accentGra = false;
let accentCir = false;
let accentUm = false;

// for (let i = 0; i < 26; i++ ) {
//     let newKey = document.createElement("button");
//     let currentDiv = document.getElementById("keyboard");
//     document.body.insertBefore(newKey, currentDiv);
// }

function clickLetter(letter) {
    if (activeMaj) {
        document.getElementById("textZone").innerHTML += letter.toUpperCase();
        
        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('A')" class="letter uppercase">a</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('E')" class="letter uppercase">e</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('U')" class="letter uppercase">u</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('I')" class="letter uppercase">i</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('O')" class="letter uppercase">o</button>`;

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
        if (pos === '12') {
            accentUm = true;
            accentKeys();
        } else {
            document.getElementById("textZone").innerHTML += letterTab[pos][1];
        }

    } else if (activeShift) {
        if (pos === '12') {
            accentUm = true;
            accentKeys();
        } else {
            document.getElementById("textZone").innerHTML += letterTab[pos][1];
            activeShift = false;
            for (i = 0; i < nb.length; i++) {
                nb[i].classList.remove("uppercase");
            }
            document.getElementById("shift").classList.remove("active");
        }
    } else if (activeAlt) {
        if (pos === '6') {
            accentGra = true;
            accentKeys();
        } else {
            document.getElementById("textZone").innerHTML += letterTab[pos][2];
            activeAlt = false;
            document.getElementById("alt").classList.remove("active");
        }

    } else if (pos === '12') {
        accentCir = true;
        accentKeys();

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
    if (accentGra) {
        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('à')" class="letter">à</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('è')" class="letter">è</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('ù')" class="letter">ù</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('ì')" class="letter">ì</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('ò')" class="letter">ò</button>`;
        accentGra = false;
        alt();  
    } 
    if (accentCir) {
        document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('â')" class="letter">â</button>`;
        document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('ê')" class="letter">ê</button>`;
        document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('û')" class="letter">û</button>`;
        document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('î')" class="letter">î</button>`;
        document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('ô')" class="letter">ô</button>`;
        accentCir = false;
    }
    if (accentUm) {
        if (activeMaj) {
            document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('Ä')" class="letter uppercase">Ä</button>`;
            document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('Ë')" class="letter uppercase">Ë</button>`;
            document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('Ü')" class="letter uppercase">Ü</button>`;
            document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('Ï')" class="letter uppercase">Ï</button>`;
            document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('Ö')" class="letter uppercase">Ö</button>`;
            accentUm = false;
        } else {
            document.getElementsByClassName("accentA")[0].innerHTML = `<button onclick="clickLetter('ä')" class="letter">ä</button>`;
            document.getElementsByClassName("accentE")[0].innerHTML = `<button onclick="clickLetter('ë')" class="letter">ë</button>`;
            document.getElementsByClassName("accentU")[0].innerHTML = `<button onclick="clickLetter('ü')" class="letter">ü</button>`;
            document.getElementsByClassName("accentI")[0].innerHTML = `<button onclick="clickLetter('ï')" class="letter">ï</button>`;
            document.getElementsByClassName("accentO")[0].innerHTML = `<button onclick="clickLetter('ö')" class="letter">ö</button>`;
            accentUm = false;
            if (activeShift) {
                shift();
            }
        }
    }
}

function tab() {
    document.getElementById("textZone").innerHTML += `&#9;`;
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