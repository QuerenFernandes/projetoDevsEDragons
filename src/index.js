import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const personagemOdin = new Personagem('Odin', 5, 'Mago');
const personagemAthena = new Personagem('Athena', 3, 'Arqueira');

const personagens = [personagemOdin, personagemAthena];

new PersonagemView(personagens).render();

console.log(personagemOdin.vida)




