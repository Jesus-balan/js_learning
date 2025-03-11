class ShoppingCart {
    constructor() {
      this.items = new Set(); // Unique items store panna
    }
  
    addItem(item) {
      if (this.items.has(item)) {
        console.log(`${item} already in cart!`);
      } else {
        this.items.add(item);
        console.log(`${item} added to cart.`);
      }
    }
  
    removeItem(item) {
      if (this.items.has(item)) {
        this.items.delete(item);
        console.log(`${item} removed from cart.`);
      } else {
        console.log(`${item} is not in the cart.`);
      }
    }
  
    viewCart() {
      console.log("Your Cart:", [...this.items]); // Set to array convert panna
    }
  }
  
  // Usage
  let cart = new ShoppingCart();
  
  cart.addItem("iPhone 15");
  cart.addItem("AirPods");
  cart.addItem("iPhone 15"); // Duplicate, so ignore pannum
  cart.addItem("MacBook Pro");
  
  cart.viewCart();
  // Output: Your Cart: [ 'iPhone 15', 'AirPods', 'MacBook Pro' ]
  
  cart.removeItem("AirPods");
  cart.viewCart();
  // Output: Your Cart: [ 'iPhone 15', 'MacBook Pro' ]
  