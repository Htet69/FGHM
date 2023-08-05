let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    function addToCart(productName, price) {
        const item = { name: productName, price: price };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Added ${productName} to cart!`);
    }

