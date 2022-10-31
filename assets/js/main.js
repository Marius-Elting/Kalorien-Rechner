// Grundumsatz bei Männern (Kalorien je Tag)
//664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
//Grundumsatz bei Frauen (Kalorien je Tag)
//655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

function berechnen(event) {
    event.preventDefault();
    let selectMann = document.getElementById("Maennlich").checked;
    let selectFrau = document.getElementById("Weiblich").checked;
    let weight = Number(document.getElementById("gewicht").value);
    let height = Number(document.getElementById("größe").value);
    let age = Number(document.getElementById("alter").value);
    let activity = document.getElementById("Aktivität").value;
    let grundKcalOutput = document.getElementById("grundKcal");
    let gesamtKcalOutput = document.getElementById("gesamtKcal");
    let gesamtkJOutput = document.getElementById("gesamtkJ");
    let grundkJOutput = document.getElementById("grundkJ");
    let grundKcal = 0;
    let gesamtKcal = 0;

    if (document.getElementById('form').checkValidity() == false) {
        alert("Bitte fülle alle Felder aus!");
        return;
    }

    //Grundumsatz
    if (selectMann == true) {
        grundKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age);
        grundKcalOutput.innerHTML = grundKcal.toFixed(2);;

    } else if (selectFrau == true) {
        grundKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        grundKcalOutput.innerHTML = grundKcal.toFixed(2);
    }

    //Gesamtumsatz
    switch (activity) {
        case "Schlafen": gesamtKcal = grundKcal * 0.95;
            break;
        case "SitzenLiegen": gesamtKcal = grundKcal * 1.20;
            break;
        case "mainSitzen": gesamtKcal = grundKcal * 1.5;
            break;
        case "zeitSitzen": gesamtKcal = grundKcal * 1.7;
            break;
        case "maingehen": gesamtKcal = grundKcal * 1.9;
            break;
        case "anstrengend": gesamtKcal = grundKcal * 2.20;
    }
    grundkJ = grundKcal * 4.1868;
    gesamtkJ = gesamtKcal * 4.1868;
    grundkJOutput.innerHTML = grundkJ.toFixed(2);
    gesamtkJOutput.innerHTML = gesamtkJ.toFixed(2);
    gesamtKcalOutput.innerHTML = gesamtKcal.toFixed(2);
}