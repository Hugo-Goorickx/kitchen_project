class Produit
{
    constructor (name, category, price, img)
    {
        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
    }

    creatBalise(balise, txt)
    {
        let out_balise = document.createElement(balise);
        let content = document.createTextNode(txt);
        out_balise.appendChild(content);
        return out_balise;
    }

    gen_card()
    {
        let start = document.getElementsByClassName("all")[0];

        let global_div = document.createElement('div');
        global_div.classList.add('article');

        let img = document.createElement('img');
        img.setAttribute("src", this.img);
        img.setAttribute("alt", this.name);
        
        let name_prod = this.creatBalise('p', this.name);
        let price_prod = this.creatBalise('p', this.price + "$");
        let button = this.creatBalise('button', 'Order');
        
        global_div.append(img, name_prod, price_prod, button);

        start.appendChild(global_div);

        console.log(global_div);
    }
    
    gen_picture()
    {
        let start = document.getElementsByClassName('carrousel')[0];
        
        let length = start.getElementsByTagName('button').length;
        let where_we_add = start.getElementsByTagName('button')[length - 1];

        let global_div = document.createElement('div');
        global_div.classList.add('item_carrousel');

        let img = document.createElement('img');
        img.setAttribute("src", this.img);

        let name_prod = this.creatBalise('p', this.name);
        // let coca = document.createElement('p');
        // let text = document.createTextNode(this.name);
        // coca.appendChild(text);

        global_div.append(img, name_prod);

        start.insertBefore(global_div, where_we_add);

        console.log(global_div)
    }
}

import file from '../menu.json' assert {type: 'json'};

let all_prod = [];
let all_categories = [];
let tmp_all_categories = [];

for (let elem of file.menu)
{
    all_prod.push(new Produit(elem.name, elem.category, elem.price, elem.img));
    tmp_all_categories.push(elem.category);
}

for (let elem of tmp_all_categories)
{
    for (let inside_elem of elem)
    {
        if (all_categories.includes(inside_elem) == false)
        {
            all_categories.push(inside_elem);
        }
    }
}

for (let elem of all_categories)

{
    let start = document.getElementsByClassName('choix')[0]

    let button = document.createElement('button');
    let button2 = document.createTextNode(elem);
    button.appendChild(button2);
    
    let length = start.getElementsByTagName('button').length;
    let choix2 = start.getElementsByTagName('button')[length - 1];

    start.insertBefore(button, choix2);
}

// tmp_all_categories1 = [["frite"], ["burger", "vegan"], ["frite"]]
// all_categories = ["frite", "burger", "vegan"]

console.log(all_categories);

console.log(all_prod);

for (let elem of all_prod)
{
    elem.gen_card();
    elem.gen_picture();
}    