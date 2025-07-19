const foodItems = [
    { id: 1, name: 'Margherita Pizza', price: 200 },
    { id: 2, name: 'Cheeseburger', price: 150 },
    { id: 3, name: 'Chocolate Cake', price: 100 }
];

// Render food items on menu page
const foodList = document.getElementById('food-list');
if (foodList) {
    foodItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
        foodList.appendChild(div);
    });
}

// Add to cart function
function addToCart(id) {
    const item = foodItems.find(f => f.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.find(c => c.id === id);
    if (found) found.qty++;
    else cart.push({...item, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(${item.name} added to cart!);
}

// Render cart items on cart page
const cartItemsDiv = document.getElementById('cart-items');
const totalDiv = document.getElementById('total');

if (cartItemsDiv && totalDiv) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = ${item.name} x${item.qty} - ₹${item.price * item.qty};
        cartItemsDiv.appendChild(div);
        total += item.price * item.qty;
    });
    totalDiv.innerText = 'Total: ₹' + total;
}