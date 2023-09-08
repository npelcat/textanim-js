//_______________________________________________
// *** LA RECURSIVITE ***
//______________________________________________


const target = document.getElementById("target");
let array = ["développeuse", "écrivaine", "swiftie", "épicurienne", "normande"];
// Pour se balader dans l'Array, il faut créer des variables qui se baladeront de mot en mot et de lettre en lettre :
let wordIndex = 0; //0 = premier crochet
let letterIndex = 0; //0 = première lettre 


// Pour passer un mot de l'array à target :
// target.textContent = array[0];


//CREER UNE FONCTION pour créer des lettres :
const createLetter = () => {
    //créer un élément dans la fonction :
    const letter = document.createElement("span");
    // dire à "target" qu'il a un enfant :
    target.appendChild(letter);
    // Passer un texte à l'élément (texte et/ou lettre):
    letter.textContent = array[wordIndex][letterIndex];

    //Si on veut que les lettres disparaissent aprés un certain temps :
    setTimeout(() => {
        letter.remove();
    },2800);
};

//jouer la fonction :
// createLetter();

// Le setInterval pour une seule lettre:
// setInterval(createLetter, 2000);
// ou pour le mot complet :
// setInterval(() => {
     // A chaque fois que tu vas jouer la fonction "createLetter", tu vas incrémenter le letterIndex (donc écrire la lettre suivante) :
//     letterIndex++;
//     createLetter();
// },200);


//Dans une fonction, le setTimeout (de base : compte à rebours, délai) sert à faire de la récursivité (une fonction qui s'appelle elle-même).


// Création d'une FONCTION RECURSIVE :
const loop = () => {
    // Le setTimeout va créer une lettre toutes les 0.1s :
    setTimeout(() => {
        //condition pour boucler sur le tableau et ne pas s'arrêter à la fin du dernier mot (si le wordIndex est supérieur ou égal à la longueur du tableau) :
        if(wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else //else if
        //Si letterIndex est inférieur à la longueur du mot dans le tableau :
        if (letterIndex < array[wordIndex].length){
            //Alors j'appelle la fonction createLetter et j'incrémente pour avoir le mot complet :
            createLetter();
            letterIndex++;
            //Appeller la fonction dans laquelle on joue (récursive) pour que l'action se répète :
            loop();
        //Si jamais, on arrive au bout du mot :
        } else {
            //On incrémente de mot (passe au mot suivant) :
            wordIndex++;
            //Le letterIndex se trouvait à la fin du premier mot, donc le remettre à 0 :
            letterIndex = 0;
            //Délai avant de relancer le prochain mot :
            setTimeout(() => {
                //Rappeler la fonction pour la rejouer :
                loop();
            },2800);
        }
    }, 80)
}
loop();
