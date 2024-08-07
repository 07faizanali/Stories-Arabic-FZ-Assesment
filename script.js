
function toggleForm() {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}
// Function to change the main product image
function changeImage(src) {
    document.getElementById('main-image').src = src;
}

// Function to add product to cart
function addToCart() {
    const product = {
        id: '1',
        name: 'Smartwatch XYZ',
        price: 199.99,
        image: './images/smartwatch6.jpg' // Ensure this path is correct
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        // Increment the quantity of the existing product
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        // Add new product with quantity 1
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    console.log('Cart:', cart); // Debug log

    // Redirect to cart page
    window.location.href = 'cart.html';
}


// Function to update the cart item count in the navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

    // Update the cart count in the navbar
    document.getElementById('cart-count').textContent = totalItems;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateCartCount);
