// // Sample structure for adding and managing cart items
// let cart = [];
// const cartCount = document.getElementById('cart-count');
// const cartContainer = document.getElementById('cart');
// const cartItemsContainer = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const cartIcon = document.querySelector('.cart a');

// // Toggle Cart Visibility
// cartIcon.addEventListener('click', (e) => {
//     e.preventDefault();
//     cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
// });

// // Sample function to add items to cart
// function addToCart(name, price) {
//     cart.push({ name, price });
//     updateCartDisplay();
// }

// // Update cart UI
// function updateCartDisplay() {
//     cartItemsContainer.innerHTML = '';
//     let total = 0;

//     cart.forEach((item, index) => {
//         const div = document.createElement('div');
//         div.className = 'cart-item';
//         div.innerHTML = `
//             <span class="cart-item-name">${item.name}</span>
//             <span class="cart-item-price">₦${item.price}</span>
//         `;
//         cartItemsContainer.appendChild(div);
//         total += item.price;
//     });

//     cartCount.innerText = cart.length;
//     cartCount.style.display = cart.length > 0 ? 'inline-block' : 'none';
//     cartTotal.innerText = total;
// }

// // Example usage: manually add a product (replace this with buttons later)
// addToCart('luggage', 100,000);
// addToCart('Handbag', 4500);


// let cartItems = [];
// let cartTotal = 0;

// function addToCart(productName, price) {
//     cartItems.push({ name: productName, price: price });
//     cartTotal += price;

//     // Display cart items
//     const cartItemsDiv = document.getElementById("cart-items");
//     cartItemsDiv.innerHTML = ""; // Clear previous

//     cartItems.forEach(item => {
//         const itemElement = document.createElement("p");
//         itemElement.textContent = `${item.name} - ₦${item.price}`;
//         cartItemsDiv.appendChild(itemElement);
//     });

//     // Update total
//     document.getElementById("cart-total").textContent = ` ₦${cartTotal}`;

//     // Update cart count
//     const cartCount = document.getElementById("cart-count");
//     cartCount.textContent = cartItems.length;
//     cartCount.style.display = "inline-block";
// }
