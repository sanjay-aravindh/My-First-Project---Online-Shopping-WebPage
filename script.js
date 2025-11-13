// Product data array
const products = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Smart Fitness Watch",
    price: 4499,
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Men's Cotton T-Shirt",
    price: 599,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Women's Denim Jeans",
    price: 1299,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Stainless Steel Cookware Set",
    price: 3499,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "LED Desk Lamp",
    price: 899,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "The Psychology of Money",
    price: 349,
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Atomic Habits",
    price: 399,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Portable Phone Charger",
    price: 1499,
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Yoga Mat with Bag",
    price: 799,
    img: "https://images.unsplash.com/photo-1519864602124-187780be63ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Coffee Maker Machine",
    price: 5999,
    img: "https://images.unsplash.com/photo-1494981958500-38b5e62fb313?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gaming Mouse RGB",
    price: 1899,
    img: "https://images.unsplash.com/photo-1508873699372-9b5447c2b81c?auto=format&fit=crop&w=800&q=80"
  }
];

// Render product cards
function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = ''; // Clear existing
  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>
    `;
  });
}

// Example cart action
function addToCart(productName) {
  alert(productName + ' added to cart!');
  // You can later expand this to update cart data, show cart count, etc.
}

// Initialize catalog on page load
window.onload = renderProducts;
