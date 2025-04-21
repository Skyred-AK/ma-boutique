// Ajout d'un événement sur tous les boutons "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produit ajouté au panier !');
    });
});
