export function rendez(lista, irany){
    /* 3. rendez(lista) -> rendezettLista | a parameterben kapott listat nev szerint rendezi,
    a fuggveny akkor fut le ha a tablazat nev fejlecere kattintunk */
    lista.sort(function(emb1, emb2){
        // vegig megy minden modon a lista elemein paronkent, ha POZITIV szamot kap nem csereli oket, de ha NEGATIVot kap akkor csereli
        let eredmeny = 1;
        if(emb1.nev < emb2.nev) eredmeny = -1;

        // S Z O R G A L M I:
        //      Átmenetileg kicseréli az á-t -> a-ra, és így rendezd!  replaceAll() fgv ajánlott!

        return eredmeny*irany;
    })

    return lista;
}


export function szures(lista, keresoSzoveg){
    const szurtLISTA = lista.filter(function(ember){
        return ember.nev.toUpperCase().includes(keresoSzoveg);
    })
    return szurtLISTA;
}

export function torol(lista, id){
    
}