export class Page {
    constructor(name) {
        this.name = name
        this.css = null
    }
    newPage() {
        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>

            </body>
            </html>`
        return html;
    }
    header() {
        let html = `
        <img src="./IMG/logo.png" alt="">
        <nav>
            <a href="./index.html">Start</a>
            <a href="./Rezeptseite.html">Rezept des Tages</a>
            <a href="#">Kontakt</a>
            <a href="#">Impressum</a>
        </nav>`
        return html;
    }
    headline(name = "Name", img = "Bild", min = "15min", dif = "easy", date = "01.01.0000") {
        let html = `
            <h1>${name}</h1>
            <img id="cover" src="./${img}" alt="IMG-headline">

            <div id="stats">
                <div><img class="picto" width="10px" src="./IMG/icons/clock-regular.svg" alt=""><p>${min} Min</p></div>
                <div><img class="picto" width="10px" src="./IMG/icons/brain-solid.svg" alt=""><p>${dif}</p></div>
                <div><img class="picto" width="10px" src="./IMG/icons/calendar-alt-regular.svg" alt=""><p>${date}</p></div>
            </div>
        `
        return html;
    }
    tableControl(x) {
        let html = `        
        <div id="input_port">
            <p>Zutaten für</p>
            <input type="number" value="1" name="portionen" id="portionen">
            <button onclick="renderRezept(${x})">Portionen</button>
        </div>
        `
        return html;
    }
    getData(){
        let portionen = document.getElementById('portionen').value;
        return portionen;
    }
    renderRezept(x){
        let portionen = document.getElementById('portionen').value;
        document.getElementById('zutatenListe').innerHTML = `` ;
        for (let i = 0; i < x.ingredients.length; i++) {
            document.getElementById('zutatenListe').innerHTML += `<p class="zutatenTable">${x.quantities[i]* portionen} ${x.unit[i]} ${x.ingredients[i]}</p>`
            
        }
        console.log(this.getData());
    }
    howTo(time, dis) {
        let html = `
        <h1>Zubereitung</h1>
        <div class="taggings">
            <div><img class="picto" width="10px" src="./IMG/icons/clock-regular.svg" alt="">ca. ${time} Minuten</div>
            <div><img class="picto" width="10px" src="./IMG/icons/clock-regular.svg" alt="">Gesamtzeit ca. ${time} Minuten</div>
        </div>
        <p>${dis}</p>
        `
        return html;
    }
    author(img, name) {
        let html = `
        <p>Rezept erstellt von</p>
        <div class="userAccount"><img class="userImage" src="${img}" alt="Bild"><p>${name}</p></div>
        `
        return html;
    }
}

export class Rezept {
    constructor(name, time = 15, dif = "simple", date = "01.01.2023") {
        this.name = name;
        this.ingredients = [];
        this.quantities = [];
        this.unit = [];
        this.img = "IMG/" + this.name + ".jpg";
        this.dis = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt. Illo, explicabo omnis! Ducimus veniam quibusdam autem similique fugit fuga beatae, aliquid culpa voluptatum eveniet voluptatibus odio repellat est ex.";
        this.time = time
        this.dif = dif
        this.date = date
    }
    
    addIngredience(a, b, c) { // Zutaten
        this.quantities.push(a);
        this.unit.push(b);
        this.ingredients.push(c);

    }
    RezeptDesTages() {
        var html = `                 
        <img src="${this.img}" alt="">
        <div>
            <h1>${this.name}</h1>
            <p>${this.dis}
            </p>
            <button>Rezept öffnen</button>
        </div>`;
        return html;
    }

    asCard() {
        var card = `
        <div class="card">
            <img class="Card_img" src="${this.img}" alt="Bild">
            <h2>${this.name}</h2>
        </div>
        `;
        return card;
    }
}

export class User {
    constructor(name, img) {
        this.name = name
        this.img = `./IMG/${img}`
    }
}

export class Artikel {
    constructor() {
        this.title = title;
        this.text = text;
        this.img = img;
    }
}