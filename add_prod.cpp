#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream fichier("menu.json");  //On ouvre le fichier
    fichier.seekg(0, ios::end);  //On se déplace à la fin du fichier

    int taille;
    taille = fichier.tellg();
    //On récupère la position qui correspond donc à la taille du fichier !

    cout << "Taille du fichier : " << taille << " octets." << endl;

    return 0;
}