//Import le fichier json
import file from '../menu.json' assert {type: 'json'};
import {Button} from './Button.js';
import {Produit} from './Produit.js';

//Variables globales
let all_prod = [];
let all_categories = [];
let tmp_all_categories = [];

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

//Creation de tous les boutons
// for (let elem of all_categories)
// {
//     elem.gen_button();
// }
all_categories[0].gen_button();

//Creation des cartes et photos
// for (let elem of all_prod)
// {
//     elem.gen_card();
//     elem.gen_picture();
// }
all_prod[0].gen_card();
all_prod[0].gen_picture();    