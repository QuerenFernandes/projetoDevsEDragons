import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoOdin = new Mago('Odin', 4, 'fogo', 4, 3);
const magaQueren = new Mago('Queren', 8, 'gelo', 10);
const arqueiraAthena = new Arqueiro('Athena', 10, 8);
const arqueiroMagoTheo = new ArqueiroMago('Theo', 7, 10, 'ar', 4, 8)

const personagens = [magoOdin, magaQueren, arqueiraAthena, arqueiroMagoTheo];

new PersonagemView(personagens).render();

console.log(personagemOdin.vida)
