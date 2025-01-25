// 1. feladat
document.write("Papp Orsi<br>")
document.write("Team15<br>")
document.write("50%<br>")

// 2. feladat
let szam = Number(prompt("Adj meg egy számot!"));

let negyzet = Math.pow(szam, 2);

document.write(`A szám négyzete: ${negyzet}<br>`);

// 3. feladat
let alsoHatar = Number(prompt("Add meg az alsó határt!"));
let felsoHatar = Number(prompt("Add meg a felső határt!"));

let parosSzam;

do{
    parosSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
} while (parosSzam % 2!== 0);
document.write(`A generált páros szám: ${parosSzam}<br>`);

// 4. feladat
let eletkor = Number(prompt("Add meg az életkorodat (1-120 között):"));

if (eletkor < 1 || eletkor > 120) {
    document.write("Hiba: Az életkor érvénytelen! Kérlek, adj meg egy 1 és 120 közötti értéket.");
} else {
    let besorolas = "";

    if (eletkor <= 6) {
        besorolas = "Kisgyermekkor";
    } else if (eletkor <= 12) {
        besorolas = "Gyermekkor";
    } else if (eletkor <= 16) {
        besorolas = "Serdülőkor";
    } else if (eletkor <= 20) {
        besorolas = "Ifjúkor";
    } else if (eletkor <= 30) {
        besorolas = "Fiatal felnőtt kor";
    } else if (eletkor <= 60) {
        besorolas = "Felnőtt kor";
    } else {
        besorolas = "Aggkor";
    }
    document.write(`A besorolásod: ${besorolas}`);
}

// 5. feladat
let szam = Number(prompt("Add meg a számot:")); 
let oszto = Number(prompt("Add meg az osztót:")); 

if (szam % oszto === 0) {
    document.write(`${oszto} osztja ${szam}-ot, maradék nélkül.`);
} else {
    document.write(`${oszto} nem osztja ${szam}-ot, maradékkal.`);
}

// 6. feladat
for (let i = 1; i <= 10; i++) {
    document.write(`A(z) ${i} négyzetszáma: ${i * i}`);
}