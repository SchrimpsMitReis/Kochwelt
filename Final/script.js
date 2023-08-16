import { Rezept, Page} from './Klassen.js';// Definitionen

const Cheeseburger = new Rezept("Cheeseburger")
Cheeseburger.addIngredience(400, "g", "Hackfleisch");
Cheeseburger.addIngredience(3, "Stk", "Käsescheiben");
Cheeseburger.addIngredience(1, "Stk", "Tomate");
Cheeseburger.addIngredience(1, "Stk", "Salat");

const Spiegelei = new Rezept("Spiegelei")
Spiegelei.addIngredience(2, "Stk", "Eier");
Spiegelei.addIngredience(50, "g", "Butter");
Spiegelei.addIngredience(1, "Priese", "Salz");

const Eierkuchen = new Rezept("Eierkuchen")
Eierkuchen.addIngredience(2, "Stk", "Eier")
Eierkuchen.addIngredience(200, "g", "Mehl")
Eierkuchen.addIngredience(1, "Priese", "Salz")

// Page inserts

const Kochwelt1 = new Page('MainPage')

// Mainpage
// Header
document.getElementById("header").innerHTML = Kochwelt1.header()
// Sektion1 - 1 Rezept
document.getElementById("S1").innerHTML = Spiegelei.RezeptDesTages();
// Sektion2 - 3 Rezepte
document.getElementById("Cards-section").innerHTML = Spiegelei.asCard();
document.getElementById("Cards-section").innerHTML += Cheeseburger.asCard();
document.getElementById("Cards-section").innerHTML += Eierkuchen.asCard();
// Sektion3 - 1 Rezepte






