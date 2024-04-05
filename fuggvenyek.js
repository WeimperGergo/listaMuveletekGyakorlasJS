import { emberLISTA } from "./adat.js";

// Függvény -- működik a hoisting -- a deklaráció a hatóköre tetejére mászik
function kiir(lista) {
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        console.log(element);
        console.log(lista[i]);
    }
}

kiir(emberLISTA); 
console.log("\n");


// Függvény kifejezés -- nem működik a hoisting -- CSAK a deklaráció után lehet meghívni
// kiir2(emberLISTA); <-- ITT MÉG NEM MŰKÖDIK
// Memóriakezelési okokból kifolyólag -ELŐNYÖS-

const kiir2 = function(lista) {
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        console.log(element);
        console.log(lista[i]);
    }
}

kiir2(emberLISTA);


function kiir3(lista) {
    console.log("forEach -> csak listához használható");
    /*
    lista.forEach((element, i) => {
        console.log(element, i)
    });
    */

    lista.forEach(function (ember, i) { // 1. param mindig az elem, második az index
        console.log(ember);
    });
}

kiir3(emberLISTA);


// 20+ idősebbek listája:
function idosebb20(lista){
    const idosebb20LISTA = lista.filter(function(ember){
        return ember.kor > 20;
    })
    console.log(idosebb20LISTA);
}

idosebb20(emberLISTA);

function ferfiak(lista){
    const ferfiakLISTAJA = lista.filter(function(ember){
        return ember.nem && ember.kor > 20; // (ember.nem === true)
    })
    console.log(ferfiakLISTAJA);
}

ferfiak(emberLISTA);


// Lista rendezése kor szerint

function korraRendez(lista){
    console.log("RENDEZÉS ************")
    lista.sort(function(emb1, emb2){
        console.log(emb1.kor, emb2.kor, emb2.kor - emb1.kor);
        return emb1.kor - emb2.kor;
    })
    console.log(lista);
}

korraRendez(emberLISTA);


// Lista elemek random keverése

function korKever(lista){
    console.log("RANDOM SORREND ************")
    lista.sort(function(emb1, emb2){
        //console.log(emb1.kor, emb2.kor, emb2.kor - emb1.kor);
        return Math.random()-0.5; // -0.5 és 0.5 között generál számokat
    })
    console.log(lista);
}

korKever(emberLISTA);