/* 
Az űrlapról összegyűjtjük az adatokat
a submit gombra kattintva betesszük a listába
*/

import { init } from "./main.js";

export function ujAdat(lista) {    
    const nevELEM = $("#nev");
    const korELEM = $("#kor");
    
    let adat = {
        nev: "",
        kor: 0,
        nem: true
    };

    const submitELEM = $("#submit");

    submitELEM.on("click", function(event){
        event.preventDefault(); /* Leszedi az alapértelmezett hozzárendelt eseményt */
        
        const nemELEM = $("input[name='nem']:checked");

        adat = {
            kor: korELEM.val(),
            nev: nevELEM.val(),
            nem: nemELEM.val()
        };
        /*
        adatOBJ.nem = (nemELEM.checked() === "true" ? true : false);
        adatOBJ.nev = nevELEM.val();
        adatOBJ.kor = Number(korELEM.val());   
        */
        const validELEM = $(".valid-feedback");
            
        if( 
            validELEM.eq(0).css("display") === "block" &&
            validELEM.eq(1).css("display") === "block"
        ){
            lista.push(adatOBJ);
            init(lista);
        }
        
        else console.log("Hibás adatok!")
    })

}


