
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


        // Function to display cart items
      // Function to display cart items
      function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
    
        cartItemsContainer.innerHTML = '';
    
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'col-md-4';
            itemElement.innerHTML = `
                <div class="card mb-4">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">$${item.price}</p>
                        <p class="card-text">Quantity: ${item.quantity || 1}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
        
            // Function to remove item from cart
          // Function to remove item from cart
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart[index];
    
        if (item.quantity > 1) {
            // Decrease the quantity
            item.quantity--;
        } else {
            // Remove item if quantity is 1
            cart.splice(index, 1);
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
    
        
            // Function to clear cart
            function clearCart() {
                localStorage.removeItem('cart');
                displayCartItems();
            }
        
            // Display cart items on page load
            window.onload = displayCartItems;
    


// Function to add product to cart
function addToCart() {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get('productID');

    // Ensure the product exists in the product list
    if (productID && products[productID]) {
        const product = products[productID];

        // Create a product object with necessary details
        const productToAdd = {
            id: productID,
            name: product.name,
            price: product.price,
            image: product.image
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product already exists in the cart
        const existingProduct = cart.find(item => item.id === productID);
        if (existingProduct) {
            // Increment the quantity of the existing product
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        } else {
            // Add new product with quantity 1
            productToAdd.quantity = 1;
            cart.push(productToAdd);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
        console.log('Cart:', cart); // Debug log

        // Redirect to cart page
        window.location.href = 'cart.html';
    } else {
        alert('Product not found.');
    }
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



// Sample data for products
const products = {
    1: {
        name: "Ultra Intelligent Smart Watch | 49mm Emblematic Infinity Screen | Connects Seamlessly with Apple iPhone & Android Devices",
        price: "$199.99",
        description: "Key Features Size: 49 mm: This indicates the diameter of the watch's case. A 49 mm size suggests a larger watch face, which could provide more space for displaying information and features. Battery: Up to 20 hours of normal use: This indicates the expected battery life of the smartwatch under regular usage conditions. A 20-hour battery life suggests a device that can last throughout a typical day of use without requiring frequent recharging..",
        image: "./images/product1/1.webp",
        thumbnails: [
            "./images/product1/2.webp",
            "./images/product1/3.webp",
            "./images/product1/4.jpg",
            "./images/product1/1.webp"
        ]
    },
    2: {
        name: "Series 8 Smartwatch [45mm - fits 130–220mm GPS + Cellular] Fitness Tracker, Blood Oxygen & ECG Apps, Always- On Display",
        price: "$179.99",
        description: "Operating System:	Android/ios Compatible Devices:	Tablet, Smartphone Special Features	Notifications Included	1 Smartwatch, 1 Manual, 1 Magnetic Charger, 1 Warranty Card Number Of Items	1 Screen display size	45 MM Strap Included  Yes Batteries Required	Yes Battery Cell Composition	Lithium Ion Wireless Type	Bluetooth Connector Type	‎Bluetooth Device interface - primary	‎Touchscreen, Buttons Warranty 1 Year Dimensions 4.4 x 3.8 x 1.08 cm Country of Origin	USA Item Weight	‎50 g",
        image: "./images/product2/1.jpg",
        thumbnails: [
            "./images/product2/2.jpg",
            "./images/product2/3.jpg",
            "./images/product2/4.jpg",
            "./images/product2/1.jpg"
        ]
    },
    3: {
        name: "Airpods Pro + Ultra Intelligent Watch 2 | Compatible with iOS and Android Devices | Combo Offer",
        price: "$149.99",
        description: "Why Choose This Premium Combo? Sophisticated Performance: Both devices deliver top-tier performance, whether you’re enjoying high-quality audio or tracking your daily health metrics. Effortless Convenience: With wireless charging for your AirPods and the versatility of the Ultra Watch 2, staying connected and powered up has never been easier. Stylish and Functional: This combo is perfect for those who value both style and substance, offering a sleek look with robust features..",
        image: "./images/product3/1.webp",
        thumbnails: [
            "./images/product3/2.webp",
            "./images/product3/3.webp",
            "./images/product3/4.webp",
            "./images/product3/1.webp"
        ]
    },
    4: {
        name: "Smart Watch Ultra | 49mm Logo Smart Watch | Infinity full Display | Compatible with Apple iPhone & Android Devices",
        price: "$149.99",
        description: "Screen Size: 49 MM (2.0) Type: Bluetooth Calling & Fitness Tracker Dial Shape: Rectangle Strap Material: Silicone / Velcro Cloth Strap  Display Type: Touchscreen Charging: Wireless Battery Capacity: 380 mAh Bluetooth Version: 5 Battery Average Life : 3-4 Days ( On General use without AOD ) Water Resistance: IP67 Dial Material: Zinc Alloy Health: Sleep Monitor, Blood Pressure Monitor, Sedentary Alert Monitor, menstrual cycle, Steps pedometer.",
        image: "./images/product4/1.webp",
        thumbnails: [
            "./images/product4/2.webp",
            "./images/product4/3.webp",
            "./images/product4/4.webp",
            "./images/product4/1.webp"
        ]
    },
    5: {
        name: "SKMEI Men's Watch New Wheels Rolling Creative Fashion Che Youhui League Fans Butterfly Double Snap Gift Wristwatch - 1990",
        price: "$199.99",
        description: "Key Features Size: 49 mm: This indicates the diameter of the watch's case. A 49 mm size suggests a larger watch face, which could provide more space for displaying information and features. Battery: Up to 20 hours of normal use: This indicates the expected battery life of the smartwatch under regular usage conditions. A 20-hour battery life suggests a device that can last throughout a typical day of use without requiring frequent recharging..",
        image: "./images/product5/1.jpg",
        thumbnails: [
            "./images/product5/1.jpg",
            "./images/product5/2.jpg",
            "./images/product5/3.jpg",
            "./images/product5/4.jpg"
        ]
    },
    6: {
        name: "Fire-Boltt Cobra Smart Watch 1.78 Always-On AMOLED Display, Army Grade Strong Build, Bluetooth Calling with 123 Sports Modes, 60 Hz Refresh Rate, IP68 Rating",
        price: "$199.99",
        description: "Vivid Visuals: The Cobra smartwatch offers a generous 1.78-inch AMOLED display, always on and vibrant, offering a crisp resolution of 368 x 448 pixels. Its smooth 60 Hz refresh rate ensures an immersive visual experience. Battle-Hardened Build: Crafted with an Army-grade design, the Cobra smartwatch flaunts a rugged, three-layer body shield, making it robust enough to withstand the toughest outdoor escapades. Seamless Connectivity: Embrace hands-free convenience with Bluetooth calling on the Cobra. Enjoy making and taking calls directly from your wrist, accompanied by the in-built voice assistance feature for added ease.",
        image: "./images/product6/1.jpg",
        thumbnails: [
            "./images/product6/2.jpg",
            "./images/product6/3.jpg",
            "./images/product6/1.jpg",
            "./images/product6/5.jpg"
        ]
    },
};

// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get('productID');

// Update the product details dynamically
if (productID && products[productID]) {
    const product = products[productID];
    document.getElementById('main-image').src = product.image;
    document.querySelector('.product-details h1').textContent = product.name;
    document.querySelector('.price').textContent = product.price;
    document.querySelector('.description').textContent = product.description;

    // Update thumbnail images
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    thumbnailContainer.innerHTML = ''; // Clear existing thumbnails
    product.thumbnails.forEach(thumbnail => {
        const img = document.createElement('img');
        img.src = thumbnail;
        img.alt = 'Product Thumbnail';
        img.onclick = () => changeImage(thumbnail, img);
        thumbnailContainer.appendChild(img);
    });

    // Set the first thumbnail as active
    if (product.thumbnails.length > 0) {
        const firstThumbnail = thumbnailContainer.querySelector('img');
        if (firstThumbnail) {
            firstThumbnail.classList.add('active');
        }
    }
}

function changeImage(src, thumbnail) {
    // Change the main image source
    document.getElementById('main-image').src = src;

    // Remove 'active' class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(img => img.classList.remove('active'));

    // Add 'active' class to the clicked thumbnail
    thumbnail.classList.add('active');
}



const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', ()=>{
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame( ()=>{
        overlayBtn.classList.add('btnScaled');
    })

});

