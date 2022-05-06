/* JavaScript est un langage de programmation alors que JQuery est une bibliothèque JavaScript open-source
permet de :
 - Ajouter, supprimer ou modifier des éléments HTML au sein de votre page.
 - Changer les styles des éléments de la page en modifiant le CSS qui leur est associé.
 - Animer des éléments de votre page.
 - Envoyer et recevoir des données depuis un serveur grâce à AJAX (asynchronous JavaScript and XML, c'est-à-dire JavaScript et XML asynchrones) 
   pour ne plus avoir besoin de recharger vos pages après validation d'un formulaire.

   grande compatibilté avec les navigateurs
   

Page WEB = modélisation du HTML sur le navigateur
DOM (Document Object Model) est nécessaire pour que JS puisse intéragir avec la page
*/

/*
VARIABLES :
- Une variable est une donnée sous un nom différent ou "identifiant"
- Permet aux scripts de converser un information dont le but est de s'y reférer par la suite (penser au camelCase)
*/
 var couuntry = "France";
 var city = "Paris";
 var animalType = "Chat";

/*
FONCTION :
- un morceau de code qui execute une action
- appler la fonction pour lancer ses actions
*/
function greetPlayers() {
    alert('Hello players !')
}

/* COMBINAISON*/
var firstName = "Théo";
function greetUser() {
    alert("Hello " + firstName);
}
greetUser();

function actualisationBio() {
    var bio = document.getElementById('biographie');
    bio.textContent = 'Nouvelle Bio';
}
actualisationBio();

/* AJOUTER JQUERY
Inclure JQUERY dans le projet :
- Ajouter le fichier via la CDN. Cela entraine une meilleure performance
 <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
*/

/* SELECTIONNER DES ELEMENTS
Sélectionner des éléments de la même manière que par les sélecteurs CSS.
$ -> élément de raccourci pour 'jQuery' qui trouve un élement dans une page = $('element') (transformation en objet jQuery)
$('p') -> sélectionner tous les paragraphe

JQuery ne peut pas être utilisé sur des objets si ceux ci ne sont pas référencer comme étant des élément jQuery
Se reférer à la documentation jquery
*/

/* UTILISER LES METHODES JQUERY
- Sélection d'un élement converti en un objet jQuery avec $()
- un point
- Nom de la méthode (déjà défini en jQuery)
- Parenthèses, vides ou contenant des paramètres

-> ("element").methode("parameter");

Méthodes animations :
- apparition après click sur un bouton
- apparition lente sur la page
- glisse vers le haut ou le bas de la page

.show() : affiche le(s) élément(s) sélectionné(s).
.hide() : masque le(s) élément(s) sélectionné(s).
.toggle() : affiche ou masque le(s) élément(s) sélectionné(s) en fonction de son/leur état actuel.
.fadeIn() : fait apparaître en fondu le(s) élément(s) sélectionné(s).
.fadeOut() : fait disparaître en fondu le(s) élément(s) sélectionné(s).
.fadeTo() : amène progressivement le(s) élément(s) sélectionné(s) à une opacité donnée.
.slideUp() : masque le(s) élément(s) sélectionné(s) avec un défilement vers le haut.
.slideDown() : masque le(s) élément(s) sélectionné(s) avec un défilement vers le bas.
.slideToggle() : affiche ou masque le(s) élément(s) sélectionné(s) avec un défilement en fonction de son/leur état actuel.

Méthodes contenu :
- Modifie le contenu (HTML, CSS...)

.html() : remplace le contenu HTML de la page
.text() : remplace le texte de la page
.replaceWith() : remplace le(s) élément(s) sélectionné(s) entièrement, pas juste le texte ou le HTML à l'intérieur
.remove() : supprime les éléments de la page
.before() : insère du contenu avant le(s) élément(s) sélectionné(s)
.after() : insère du contenu après le(s) élément(s) sélectionné(s)
.prepend() : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (après la balise HTML ouvrante)
.append() : insère du contenu à l'intérieur du/des élément(s) sélectionné(s) (avant la balise HTML fermante)
.attr() : définit un attribut et sa valeur ou simplement récupère sa valeur
.removeAttr() : supprime un attribut, RIP
.addClass() : ajoute une nouvelle classe à/aux élément(s) sélectionné(s) (sans remplacer sa classe actuelle)
.removeClass() : supprime une classe du/des élément(s) sélectionné(s)
.css() : mon préféré. Récupère ou définit les propriétés CSS d'un élément, même plusieurs propriétés à la fois.

Parcours du DOM :
.find() : trouve un/des élément(s) correspondant au paramètre dans la sélection actuelle
.parent() : accède au parent direct d'un/des élément(s) ou à ses parents si on utilise .parents()
.children() : accède aux enfants de(s) élément(s)

Taille et Position :
.height() : hauteur d'un cadre sans les marges intérieures, extérieurs ni les bords
.width (): largeur d'un cadre sans les marges intérieures, extérieurs ni les bords

Si vous voulez vraiment pousser à fond votre utilisation des dimensions et du redimensionnement des éléments, 
il existe aussi des méthodes jQuery qui prennent en compte les bords, les marges intérieures et extérieures, ensemble ou séparément.

.innerHeight() : hauteur en comptant les marges intérieures
.innerWidth() : largeur en comptant les marges intérieures
.outerHeight() : hauteur en comptant les marges intérieures et les bords
.outerWidth() : largeur en comptant les marges intérieures et les bords
.outerHeight(true) : même méthode que ci-dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.
.outerWidth(true) : même méthode que ci-dessus, mais en envoyant le paramètre true, vous incluez également les marges extérieures.

Le positionnement des éléments peut être géré grâce à deux méthodes :

.offset() : définit les coordonnées d'un élément relativement au coin en haut à gauche de l'objet document
.position() : définit les coordonnées d'un élément relativement à son parent direct, ce qui peut être utile pour positionner des éléments au sein du même élément DOM. 
Mais vous utiliserez probablement .offset  plus souvent.
*/

/* INTEGRER DES EVENEMENTS
$('element').on('evenement', function()) {}
La méthode 'on' est un event listener

.on('click', function() { … }
.on('scroll', function() { … }
.on('hover', function() { … }
.on('mouseover', function() { … }
.on('mouseenter', function() { … }
.on('mouse leave', function() { … }
.on('keydown', function() { … }
.on('keyup', function() { … }
.on('keypress', function() { … }
.on('focus', function() { … }
.on('blur', function() { … }
.on('resize', function() { … }
 */

$('p').on( 'click', function () {
    alert("Quelqu'un a cliqué sur un paragraphe!")
});

/*
Propriéte de l'objet 'event' :
- Son type
- La target de l'event
- le timestamp (sa durée)
*/

var $p = $('p');
$p.on('click', function(event) {
  var date = new Date(event.timeStamp);
	$p.text("You clicked on: " + date)
});