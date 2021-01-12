
let text = [];
let activeMaj = false;
let activeShift = false;
let activeAlt = false;
let activeQwerty = false;

let nb = document.querySelectorAll(".letter");

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
        ['1','&',''],
        ['2','é','~'],
        ['3','"','#'],
        ['4',"'",'{'],
        ['5','(','['],
        ['6','-','|'],
        ['7','è','`'],
        ['8','_','\\'],
        ['9','ç','^'],
        ['0','à','@']
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
    activeShift = false;

    if (activeMaj) {
        activeMaj = !activeMaj;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("maj").classList.remove("active");
    } else {
        activeMaj = !activeMaj;
        document.getElementById("shift").classList.remove("active");
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.add("uppercase");
        }
        document.getElementById("maj").classList.add("active");
    }

    console.log("MAJ : " + activeMaj);
}

function shift() {
    if (activeMaj) {
        alert("ATTENTION la touche MAJ est active!");
    } else if (activeShift) {
        activeShift = false;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.remove("uppercase");
        }
        document.getElementById("shift").classList.remove("active");
    } else {
        activeShift = true;
        for (i = 0; i < nb.length; i++) {
            nb[i].classList.add("uppercase");
        }
        document.getElementById("shift").classList.add("active");
    };

    console.log("Shift : " + activeShift);
}

function alt() {
    activeMaj = false;
    activeShift = false;

    if (activeAlt) {
        activeAlt = false;
        document.getElementById("alt").classList.remove("active");

    } else {
        activeAlt = true;
        document.getElementById("alt").classList.add("active");

    };

    console.log(activeAlt);
}

function back() {
    document.getElementById("textZone").innerHTML = text.slice(text, -1);
}

function erase() {
    document.getElementById("textZone").innerHTML = '';
}

function qwertySwitch() {
    activeAlt = false;
    activeMaj = false;
    activeShift = false;

    if (activeQwerty) {
        activeQwerty = false;
        document.getElementById("qwertyBtn").innerHTML = 'AZERTY';  
        document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
        document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('z')" class="letter">z</button>`;
        document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('q')" class="letter">q</button>`;
        document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('w')" class="letter">w</button>`;
    
    } else {
        activeQwerty = true;
        document.getElementById("qwertyBtn").innerHTML = 'QWERTY';
        document.getElementById("qwerty1").innerHTML = `<button onclick="clickLetter('q')" class="letter">q</button>`;
        document.getElementById("qwerty2").innerHTML = `<button onclick="clickLetter('w')" class="letter">w</button>`;
        document.getElementById("qwerty3").innerHTML = `<button onclick="clickLetter('a')" class="letter">a</button>`;
        document.getElementById("qwerty4").innerHTML = `<button onclick="clickLetter('z')" class="letter">z</button>`;
    }
}