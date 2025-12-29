let cart = [];
let cartCount = document.getElementById('cart-count');
let cartItems = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');
let modal = document.getElementById('cart-modal');
let cartLink = document.getElementById('cart-link');
let closeBtn = document.querySelector('.close');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let name = button.dataset.name;
        let price = parseFloat(button.dataset.price);
        cart.push({ name, price });
        updateCart();
    });
});

cartLink.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout functionality not implemented. Integrate with a payment gateway like Stripe.');
});