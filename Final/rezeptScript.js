import { Rezept, Page, User } from './Klassen.js';

// Funktionen 
function fullPage(rezept, page, user){
    document.getElementById('header').innerHTML = page.header();
    document.getElementById('headline').innerHTML += page.headline(rezept.name, rezept.img, rezept.time, rezept.dif,rezept.date);
    document.getElementById('control').innerHTML = page.tableControl(rezept);
    page.renderRezept(rezept);
    document.getElementById('description').innerHTML = page.howTo(rezept.time, rezept.dis);
    document.getElementById('author').innerHTML = page.author(user.img, user.name);
}


// Definitionen
const Cheeseburger = new Rezept("Cheeseburger");
Cheeseburger.addIngredience(400, "g", "Hackfleisch");
Cheeseburger.addIngredience(3, "Stk", "Käsescheiben");
Cheeseburger.addIngredience(1, "Stk", "Tomate");
Cheeseburger.addIngredience(1, "Stk", "Salat");

const Spiegelei = new Rezept("Spiegelei");
Spiegelei.addIngredience(2, "Stk", "Eier");
Spiegelei.addIngredience(50, "g", "Butter");
Spiegelei.addIngredience(1, "Priese", "Salz");

const Eierkuchen = new Rezept("Eierkuchen");
Eierkuchen.addIngredience(2, "Stk", "Eier");
Eierkuchen.addIngredience(200, "g", "Mehl");
Eierkuchen.addIngredience(1, "Priese", "Salz");

const Ameisenkuchen = new Rezept("Ameisenkuchen");
Ameisenkuchen.addIngredience(250, "g", "Butter")
Ameisenkuchen.addIngredience(250, "g", "Zucker")
Ameisenkuchen.addIngredience(4, "Stk", "Eier")
Ameisenkuchen.addIngredience(300, "g", "Mehl")
Ameisenkuchen.addIngredience(100, "g", "Speisestärke")
Ameisenkuchen.addIngredience(1, "Pkg", "Backpulver")
Ameisenkuchen.addIngredience(2, "Pkg", "Vanillin Zucker")
Ameisenkuchen.addIngredience(100, "g", "Schokoblättchen")
Ameisenkuchen.addIngredience(100, "ml", "Milch")
Ameisenkuchen.addIngredience(1, "Priese", "Salz")

const Junus = new User("Junus", "profile.png");
const Kochwelt1 = new Page('Rezeptseite');

// Aktiv

fullPage(Ameisenkuchen, Kochwelt1, Junus)
