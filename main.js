import { emberLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listaMegjelenit.js";

init();
function init() {
    const SZOVEG = htmlOsszeallit(emberLISTA);
    megjelenit(SZOVEG);
}