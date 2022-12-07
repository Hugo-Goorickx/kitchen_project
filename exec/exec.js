//Import le fichier json
import file from '../menu.json' assert {type: 'json'};
import {Button} from './Button.js';
import {Produit} from './Produit.js';
import {test} from './Produit.js';

//Variables globales
let all_prod = [];
let all_categories = [];
let tmp_all_categories = [];
let index_carrousel = 0;
let index_button = 0;

//Extraction des donnees du json
for (let elem of file.menu)
{
    all_prod.push(new Produit(elem.name, elem.category, elem.price, elem.img));
    
    //Extraction des categories et stockages des Buttons (sous forme de classe)
    for (let inside_elem of elem.category)
    {
        if (tmp_all_categories.includes(inside_elem) == false)
        {
            tmp_all_categories.push(inside_elem);
            all_categories.push(new Button(inside_elem));
        }
    }
}

function car_left()
{
    let pos_old_pic = document.getElementsByClassName('item_carrousel')[0];
    pos_old_pic.remove();
    index_carrousel = index_carrousel - 1;
    if (index_carrousel < 0)
        index_carrousel = all_prod.length - 1;
    all_prod[index_carrousel].gen_picture();    
}

function car_right()
{
    let pos_old_pic = document.getElementsByClassName('item_carrousel')[0];
    pos_old_pic.remove()
    index_carrousel = index_carrousel + 1;
    if (index_carrousel >= all_prod.length)
        index_carrousel = 0;
    all_prod[index_carrousel].gen_picture();
}

//  0        <=          7 8
// [1, 2, 3, 4, 5, 6, 7, 8]... => 8

function button_left()
{
    let pos_old_button = document.getElementsByClassName('menu')[0];
    pos_old_button.remove();
    index_button = index_button - 1;
    if(index_button < 0)
        index_button = all_categories.length -1;
    all_categories[index_button].gen_button();
    let pos_button = document.getElementsByClassName('menu')[0];
    pos_button.addEventListener("click", show_cat);
}

function button_right()
{
    let pos_old_button = document.getElementsByClassName('menu')[0];
    pos_old_button.remove()
    index_button = index_button + 1;
    if( index_button >= all_categories.length)
        index_button = 0;
    all_categories[index_button].gen_button();
    let pos_button = document.getElementsByClassName('menu')[0];
    pos_button.addEventListener("click", show_cat);
}

function show_cat()
{
    let pos_old_article = document.getElementsByClassName('article');
    let name_cat = all_categories[index_button].name;

    while (pos_old_article.length != 0)
    {
        pos_old_article[0].remove();
    }

    for (let elem of all_prod)
    {
        tmp_all_categories = elem.category;
        for (let single_cat of tmp_all_categories)
        {
            if (single_cat == name_cat)
            {
                elem.gen_card();
            }
        }
    }
}

//Buttons for carrousele picture
let pos_buttons_car = document.getElementsByClassName('fl_gr');
let pos_button_left_car = pos_buttons_car[0];
let pos_button_right_car = pos_buttons_car[1];
pos_button_left_car.addEventListener("click", car_left);
pos_button_right_car.addEventListener('click', car_right);

//Buttons for carrousele categories' button
let pos_buttons_cat = document.getElementsByClassName('fl_pt');
let pos_button_left_cat = pos_buttons_cat[0];
let pos_button_right_cat = pos_buttons_cat[1];
pos_button_left_cat.addEventListener('click', button_left);
pos_button_right_cat.addEventListener('click', button_right);

//Creation par defaut des buttons et images
all_categories[0].gen_button();
all_prod[0].gen_picture();    

let pos_button = document.getElementsByClassName('menu')[0];
pos_button.addEventListener("click", show_cat);

show_cat();

function show_order()
{
    console.log(test);
    let somme = 0;
    for (let elem of test)
        somme = somme + parseInt(elem.price);
    console.log(somme);
    
}

let pos_prim_order = document.getElementsByTagName('ul')[0];
let pos_order = pos_prim_order.getElementsByTagName('li')[pos_prim_order.getElementsByTagName('li').length - 1];

pos_order.addEventListener("click", show_order);

