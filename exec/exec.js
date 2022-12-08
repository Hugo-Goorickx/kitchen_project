/** Change l'image en focntion du sens dans le quel on va (1 = doite | -1 = gauche)
 *  Details:
 *      1       Se place la ou va ajouter l'iamge
 *      2       Supprime l'ancienne image
 *      3       Ajoute le deplacement
 *      4       Si l'index est plus petit que 0 alors on remet a la fin du tableau
 *              [0, 1, 2, 3]
 *               0   =>   3
 *      5       Si l'index est plus grand que la taille du tableau alors on remet au debut du tableau
 *              [0, 1, 2, 3]
 *               0   <=   3
 *      6       On genere la nouvelle image   
 *
 *  Params:
 *      move    =>  Valeur de declage (1 droite | -1 gauche)
 * 
 *  Return:
 *      Rien
 */
function move_car_up(move)
{
    let pos_old_pic = document.getElementsByClassName('item_carrousel')[0]; //1
    pos_old_pic.remove(); //2
    index_carrousel = index_carrousel + move; //3
    if (index_carrousel < 0) //4
        index_carrousel = all_prod.length + move;
    else if (index_carrousel == all_prod.length) //5
        index_carrousel = 0;
    all_prod[index_carrousel].gen_picture(); //6
}

/** Change l'image en focntion du sens dans le quel on va (1 = doite | -1 = gauche)
 *  Details:
 *      1       Se place la ou va ajouter l'iamge
 *      2       Supprime l'ancienne image
 *      3       Ajoute le deplacement
 *      4       Si l'index est plus petit que 0 alors on remet a la fin du tableau
 *              [0, 1, 2, 3]
 *               0   =>   3
 *      5       Si l'index est plus grand que la taille du tableau alors on remet au debut du tableau
 *              [0, 1, 2, 3]
 *               0   <=   3
 *      6       On genere la nouvelle image
 *      7       Ajoute l'event show_cat pour afficher les produits de sa categorie
 *
 *  Params:
 *      move    =>  Valeur de declage (1 droite | -1 gauche)
 * 
 *  Return:
 *      Rien
 */
function move_car_down(move)
{
    let pos_old_button = document.getElementsByClassName('menu')[0]; //1
    pos_old_button.remove(); //2
    index_button = index_button + move; //3
    if(index_button < 0) //4
        index_button = all_categories.length + move;
    else if (index_button >= all_categories.length) //5
        index_button = 0;
    all_categories[index_button].gen_button(); //6
    let pos_button = document.getElementsByClassName('menu')[0];//7
    pos_button.addEventListener("click", show_cat);
}

/** Ajoute les articles de la bonne categories
 *  Details:
 *      1       Prends la position ou nous allons ajouter les produits
 *      2       Extrait son nom
 *      3       Supprime les anciens produits
 *      4       Ajoute les nouvelles cartes
 * 
 *  Params:
 *      Rien
 * 
 *  Return:
 *      Rien
 */
function show_cat()
{
    let pos_old_article = document.getElementsByClassName('article'); //1
    let name_cat = all_categories[index_button].name; //2

    while (pos_old_article.length != 0) //3
        pos_old_article[0].remove();

    for (let elem of all_prod) //4
        for (let single_cat of elem.category)
            if (single_cat == name_cat)
                elem.gen_card();
}

/** Renvoi les produits achetes et la somme totale
 *  Details:
 *      1       Genere la somme
 *      2       Genere l'output
 *      3       Ouvre une box alert avec l'output genere
 * 
 *  Params:
 *      Rien
 * 
 *  Return:
 *      Rien
 */
function show_order()
{
    let somme = 0;//1
    for (let elem of test)
        somme += parseInt(elem.price);
    let output = "Vous avez commandez:\n";//2
    for (let elem of test)
        output += "    -" + elem.name + " : " + elem.price + "$\n";
    output += "Pour un total de " + somme +"$";
    window.alert(output);//3
}

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

//Buttons for carrousele picture
let pos_buttons_car = document.getElementsByClassName('fl_gr');
pos_buttons_car[0].addEventListener("click",  function(){move_car_up(-1);});
pos_buttons_car[1].addEventListener('click', function(){move_car_up(1);});

//Buttons for carrousele categories' button
let pos_buttons_cat = document.getElementsByClassName('fl_pt');
pos_buttons_cat[0].addEventListener('click', function(){move_car_down(-1);});
pos_buttons_cat[1].addEventListener('click', function(){move_car_down(1);});

//Creation par defaut des buttons et images
all_categories[0].gen_button();
all_prod[0].gen_picture();    

//Ajoute la fonction de l'affichage de la commande actuelle 
let pos_prim_order = document.getElementsByTagName('ul')[0];
let pos_order = pos_prim_order.getElementsByTagName('li')[pos_prim_order.getElementsByTagName('li').length - 1];
pos_order.addEventListener("click", show_order);

//Ajoute la fonction de l'affichage lors du clic
let pos_button = document.getElementsByClassName('menu')[0];
pos_button.addEventListener("click", show_cat);

show_cat();
