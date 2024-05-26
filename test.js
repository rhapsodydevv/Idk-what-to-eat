const foods = [
    { name: "Spaghetti Bolognese", image: "spaghetti.jpg" },
    { name: "Chicken Salad", image: "chicken.jpg" },
    { name: "Beef Tacos", image: "beef.jpg" },
    { name: "Vegetable Stir Fry", image: "fish.jpg" },
    { name: "Pizza Margherita", image: "pasta.jpg" }
];

const sides = [
    { name: "Garlic Bread", image: "ugali.jpg" },
    { name: "French Fries", image: "rice.jpg" },
    { name: "Caesar Salad", image: "watermelon.jpg" },
    { name: "Mashed Potatoes", image: "apple.jpg" },
    { name: "Onion Rings", image: "rice.jpg" }
];

document.getElementById('randomizeButton').addEventListener('click', function() {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    
    document.getElementById('foodImageB').src = randomFood.image;
    document.getElementById('foodNameB').textContent = randomFood.name;
    document.getElementById('foodImageS').src = randomSide.image;
    document.getElementById('foodNameS').textContent = randomSide.name;

    document.getElementById('selectedB').textContent = randomFood.name;
    document.getElementById('selectedS').textContent = randomSide.name;
});

// Initialize with random food and side on page load
window.onload = function() {
    document.getElementById('randomizeButton').click();
};
