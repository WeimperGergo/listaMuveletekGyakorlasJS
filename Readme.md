# Listakezelő függvények gyakorlás

## Specifikáció

jelenitsuk meg a listankat egy tablazatban, majd a listat tudjuk rendezni pl nev szerint, ha rakattintunk a tablazat fejlecere akkor rendezze be a tablazat sorait.
Tudjunk szurni nev alapjan 
Tudjunk uj adatot hozzaadni a tablazathoz
Tudjuk torolni a tablazat egy sorat


## Metódusok

1. **htmlosszeallit(lista)->txt** | osszeallitja a tablazat html szerkezetet egy szoveges valtozoba
2. **megjelenit(txt)** -> megjelenitette egy adott html elemben a parametereben kapott szoveget
3. **rendez(lista) -> rendezettLista** | a parameterben kapott listat nev szerint rendezi, a fuggveny akkor fut le ha a tablazat nev fejlecere kattintunk
4. **adatHozzaadas(lista) -> kibovitettLista** | osszegyujti az urlaprol az adatokat es osszeallit beloluk egy objektumot, majd azt beleteszi a listaba -> a fuggveny akkor fut le ha rakattintunk a submit gombra
5. **torol(lista, id) -> tLista** | kitorli a listabol a kattintott id-s elemet -> Akkor fog lefutni, ha a sor melletti torol gombra kattintunk
6. **szures(lista, keresoSzoveg) -> szurtLista** | keresomezobe beirt szoveget keresi a lista objektumainak nev mezojeben -> accor fut le, ha beirunk valamit a keresomezobe
