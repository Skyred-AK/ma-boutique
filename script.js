// Exemple pour afficher un message lorsque l'article est ajouté au panier
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("L'article a été ajouté au panier !");
    });
});
