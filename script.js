let cart = [];

// Add item to cart
function addToCart(item, price) {
  let found = cart.find(c => c.item === item);

  if (found) {
    found.qty++;
  } else {
    cart.push({ item, price, qty: 1 });
  }

  updateCart();
}

// Remove item from cart
function removeFromCart(item) {
  cart = cart.filter(c => c.item !== item);
  updateCart();
}

// Update cart display and bill
function updateCart() {
  let list = document.getElementById("cartItems");
  let subtotal = 0;
  list.innerHTML = "";

  cart.forEach(c => {
    let itemTotal = c.price * c.qty;
    subtotal += itemTotal;

    let li = document.createElement("li");
    li.innerHTML = `
      ${c.item} × ${c.qty} = ₹${itemTotal}
      <button onclick="removeFromCart('${c.item}')"
        style="margin-left:10px;background:#e74c3c;color:white;border:none;padding:5px 8px;border-radius:4px;cursor:pointer;">
        Remove
      </button>
    `;
    list.appendChild(li);
  });

  let gst = subtotal * 0.05;
  let discount = subtotal >= 500 ? subtotal * 0.10 : 0;
  let total = subtotal + gst - discount;

  document.getElementById("subtotal").innerText = "Subtotal: ₹" + subtotal;
  document.getElementById("gst").innerText = "GST (5%): ₹" + gst.toFixed(2);
  document.getElementById("discount").innerText = "Discount: ₹" + discount.toFixed(2);
  document.getElementById("total").innerText = "Grand Total: ₹" + total.toFixed(2);
}




