const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
let actualTheme = currentTheme;

if (currentTheme)
{
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        actualTheme = 'dark';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        actualTheme = 'light';
    } 
    changeColor();  
}

toggleSwitch.addEventListener('change', switchTheme, false);

//en dessous

let fleche_droite_noir = document.createElement('img');
fleche_droite_noir.setAttribute('src', 'imgs/black_arrow_right.png');
let fleche_droite_noir_copy = fleche_droite_noir.cloneNode();

let fleche_gauche_noir = document.createElement('img');
fleche_gauche_noir.setAttribute('src', 'imgs/black_arrow_left.png');
let fleche_gauche_noir_copy = fleche_gauche_noir.cloneNode();

let fleche_droite_blanche = document.createElement('img');
fleche_droite_blanche.setAttribute('src', 'imgs/white_arrow_right.png');
let fleche_droite_blanche_copy = fleche_droite_blanche.cloneNode();

let fleche_gauche_blanche = document.createElement('img');
fleche_gauche_blanche.setAttribute('src', 'imgs/white_arrow_left.png');
let fleche_gauche_blanche_copy = fleche_gauche_blanche.cloneNode();

changeColor();

function light(fl_gc, fl_gc_copy, fl_dr, fl_dr_copy) {
    for (let elem of document.getElementsByClassName('fl_gr'))
    {
        if (elem.getElementsByTagName('img').length !=0)
        {
            elem.removeChild(elem.getElementsByTagName('img')[0]);
        }
    }
    for (let elem of document.getElementsByClassName('fl_pt'))
    {
        if (elem.getElementsByTagName('img').length !=0)
        {
            elem.removeChild(elem.getElementsByTagName('img')[0]);
        }
    }
    document.getElementsByClassName('fl_gr')[0].appendChild(fl_gc);
    document.getElementsByClassName('fl_gr')[1].appendChild(fl_dr);
    document.getElementsByClassName('fl_pt')[0].appendChild(fl_gc_copy);
    document.getElementsByClassName('fl_pt')[1].appendChild(fl_dr_copy);
}

function changeColor()
{
    console.log(actualTheme);
    if (actualTheme === 'dark') {
        light(fleche_gauche_blanche, fleche_gauche_blanche_copy, fleche_droite_blanche, fleche_droite_blanche_copy);
    }
    else if (actualTheme === 'light') {
        light(fleche_gauche_noir, fleche_gauche_noir_copy, fleche_droite_noir, fleche_droite_noir_copy);
    }

}