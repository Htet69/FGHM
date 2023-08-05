const productsData = [
    { id: 1, name: "Men's Casual Shirt", price: 45 },
    { id: 2, name: "Men's Jacket", price: 75 },
    { id: 3, name: "Men's Jeans", price: 60 },

];

function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalAmount = document.querySelector('.cart-total-amount');

    cartItemsContainer.innerHTML = '';

    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);

        let totalAmount = 0;

        cart.forEach((item, index) => { 
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            cartItemDiv.innerHTML = `
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">$${item.price}</p>
                    <button class="remove-btn" onclick="removeItemFromCart(${index})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            totalAmount += item.price;
        });

        cartTotalAmount.textContent = `$${totalAmount}`;
    } else {

        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotalAmount.textContent = '$0';
    }
}

function removeItemFromCart(index) {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);

        cart.splice(index, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        displayCartItems();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const proceedBtn = document.querySelector(".proceed-btn");
    const cartItemsDiv = document.querySelector(".cart-items");
    const cartTotalAmount = document.querySelector(".cart-total-amount");

    proceedBtn.addEventListener("click", function () {
        if (cartItemsDiv.children.length === 0) {
            alert("Your cart is empty. Add some items before proceeding to buy.");
        } else {
            alert("Please enter payment methods")
            window.location.href="Paymethod.html"

            cartItemsDiv.innerHTML = "";

            cartTotalAmount.textContent = "$0";
        }
    });
});

function payNow() {
    alert("Item purchased successfully!");
    window.location.href="index.html"
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const cardNumber = document.getElementById("cardNumber").value;
    const nameOnCard = document.getElementById("nameOnCard").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    payNow();
    
  }

document.addEventListener('DOMContentLoaded', displayCartItems);

