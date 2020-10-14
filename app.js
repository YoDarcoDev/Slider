const imgs = document.querySelectorAll('.cont-slides img');   // renvoyer un tableau
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');

let index = 0;

// console.log(imgs);



// SLIDE SUIVANTE

suivant.addEventListener('click', slideSuivante);

function slideSuivante() {
    
    if (index < 2) {

        imgs[index].classList.remove('active');     // Fait disparaitre l'image (opacity : 0)
        index ++;
        imgs[index].classList.add('active');       // Fait apparaitre l'image (opacity : 1)

        // console.log(index);
    }

    else if (index === 2) {
        
        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

        // console.log(index);
    }

    for (i = 0; i < cercles.length; i++) {                              // Permet de sélectionner le cercle en fct° de l'image affiché

        if (cercles[i].getAttribute("data-clic") - 1 === index) {
            cercles[i].classList.add('active-cercle');
        }

        else {
            cercles[i].classList.remove('active-cercle');
        }
    }

}



// SLIDE PRECEDENTE 

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente() {

    if (index > 0) {

        imgs[index].classList.remove('active');
        index --;
        imgs[index].classList.add('active');
    }

    else if (index === 0) {

        imgs[index].classList.remove('active');
        index = 2;
        imgs[index].classList.add('active');
    }

    for (i = 0; i < cercles.length; i++) {

        if (cercles[i].getAttribute("data-clic") - 1 === index) {
            cercles[i].classList.add('active-cercle');
        }

        else {
            cercles[i].classList.remove('active-cercle');
        }
    }
}



// CHANGER SLIDES TOUCHES CLAVIER

document.addEventListener('keyup', keyPressed);

function keyPressed(e) {

    if (e.keyCode === 37) {
        slidePrecedente();
    }

    else if (e.keyCode === 39) {
        slideSuivante();
    }

}



// CERCLES

cercles.forEach(cercle => {

    cercle.addEventListener('click', function() {  // Avec this on utilise une fct° classique / this = contexte appelant de notre méthode

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');   // Enlève le Bg de tous les cercles
        }

        this.classList.add('active-cercle');                // On rajoute la classe active-cercle sur le cercle cliqué

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') -1;
        imgs[index].classList.add('active');

    })
})





/*
NOTES :

Les fonctions fléchées font référence au contexte englobant et les fonctions classiques au contexte appelant de notre méthode
*/ 