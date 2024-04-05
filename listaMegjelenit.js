export function htmlOsszeallit(lista) {
    // Táblázatot állítok össze
    let txt = "<table class='table table-striped'>";
    txt += `
    <thead>
        <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Nem</th>
        </tr>
    </thead>
    <tbody>
    `;
    lista.forEach(function(item, ind){
        let nem = "";
        if (item.nem === true) nem = "Férfi";
        else nem = "Nő";
        txt += `
        <tr>
            <th>${item.nev}</th>
            <th>${item.kor}</th>
            <th>${nem}</th>
        </tr>
        `;
    });
    txt += "</tbody><table>";
    return txt;
}

export function megjelenit(txt){
    const divELEM = $(".adatok");
    divELEM.html(txt);
}