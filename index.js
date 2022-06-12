let startUp = document.getElementById("startUp");
let EndOf = document.getElementById("EndOf");
let Calculate = document.getElementById("Calculate");
let numberOfLetter = document.getElementById("numberOfLetter");
let totalAmount = document.getElementById("totalAmount");
let Clear = document.getElementById("Clear");
let VAT = document.getElementById("VAT");
let valit1 = document.querySelector('.valit1');
let valit2 = document.querySelector('.valit2');
let valit12 = document.querySelector('.valit12');
let valit22 = document.querySelector('.valit22');
let valits = document.querySelectorAll('.valit');
let inputs = document.getElementsByTagName("input");

var input = document.getElementById("myInput");
[...inputs].forEach(e => { //Enter Click thoi KO co j dau
    e.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("Calculate").click();
        }
    });
});
function cal() {
    let VAT2 = (100 + parseInt(VAT.value)) / 100;
    while (startUp.value == "" || EndOf.value == "" || isNaN(startUp.value) || isNaN(EndOf.value)) {
        CheckEmpty(startUp, valit1);
        CheckEmpty(EndOf, valit2);
        Checknumber(startUp.value, valit12);
        Checknumber(EndOf.value, valit22);
        return
    }
    while (EndOf.value - startUp.value < 0) {
        alert("End-of-items digits must be higher than Start-up period");
        return
    }
    [...valits].forEach(x => {
        x.style.display = "none";
    });
    numberOfLetter.value = EndOf.value - startUp.value;
    let n = parseInt(numberOfLetter.value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i <= 50) {
            sum += 1480;
        }
        else 
        if (i <= 100) {
            sum += 1500;
        }
        else {
            sum += 1800;
        }
    }
    totalAmount.value = (sum * VAT2).toFixed(0);
}
Clear.onclick = function () {
    [...inputs].forEach(x => {
        x.value = "";
    });
    [...valits].forEach(x => {
        x.style.display = "none"
    })
    VAT.value = 10;
}
function CheckEmpty(x, y) {
    if (x.value == "") {
        y.style.display = "block"
    }
    else {
        y.style.display = "none"
    }
}
function Checknumber(x, y) {
    if (isNaN(x)) {
        y.style.display = "block"
    }
    else {
        y.style.display = "none"
    }
}


