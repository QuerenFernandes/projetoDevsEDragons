import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoOdin = new Mago('Odin', 'fogo', 4, 3);
const magaQueren = new Mago('Queren', 'gelo', 10);
const arqueiraAthena = new Arqueiro('Athena', 8);
const arqueiroMagoTheo = new ArqueiroMago('Theo', 10, 'ar', 4, 8)
const guerreiroThor = new Guerreiro('Thor', 15)

const personagens = [magoOdin, magaQueren, arqueiraAthena, arqueiroMagoTheo, guerreiroThor];

new PersonagemView(personagens).render();

console.log(personagemOdin.vida)
