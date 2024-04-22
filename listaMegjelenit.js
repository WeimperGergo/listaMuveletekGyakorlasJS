export function htmlOsszeallit(lista) {
    // Táblázatot állítok össze
    let txt = "<table class='table table-striped'>";
    txt += `
    <thead>
        <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Nem</th>
            <th>Törlés</th>
        </tr>
    </thead>
    <tbody>
    `;
    lista.forEach((elem, ind)=> {
        let nem = "";
        txt += "<tr>";
        for (const kulcs in elem) {
            // Objektumokat járhatunk be
            // console.log("kulcs: ", kulcs, elem[kulcs]);
            txt += `<td>${elem[kulcs]}</td>`;
        } 
        txt += `<td class="torol" id="${ind}">🗑️</td>`;
        txt += "</tr>";
    });

    /*lista.forEach(function(item, index){
        let nem = "";
        txt += "<tr>";
        if (item.nem === true) nem = "Férfi";
        else nem = "Nő";
        txt += `
            <th>${item.nev}</th>
            <th>${item.kor}</th>
            <th>${nem}</th>
        `;
        txt += "</tr>";
    });*/
    txt += "</tbody><table>";
    return txt;
}

export function megjelenit(txt){
    const divELEM = $(".adatok");
    divELEM.html(txt);
}