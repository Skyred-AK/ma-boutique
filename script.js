let cart = [];

document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            name: this.parentElement.querySelector('h3').innerText,
            price: this.parentElement.querySelector('p').innerText,
        };

        cart.push(product);
        alert(`${product.name} a été ajouté au panier.`);
        console.log(cart);
    });
});
