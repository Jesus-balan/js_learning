// 🚀 1. Encapsulation (Protecting Order Details)

class Order {
    constructor(orderId, items, totalAmount) {
        this.orderId = orderId;
        this.items = items;
        let _totalAmount = totalAmount; // Private variable

        this.getTotalAmount = function () {
            return _totalAmount;
        };

        this.updateTotalAmount = function (amount) {
            if (amount > 0) {
                _totalAmount = amount;
            }
        };
    }

    getOrderSummary() {
        return `Order ID: ${this.orderId}, Items: ${this.items.join(", ")}`;
    }
}

const order1 = new Order(101, ["Burger", "Fries"], 250);
console.log(order1.getOrderSummary()); // Order ID: 101, Items: Burger, Fries
console.log(order1.getTotalAmount()); // 250
order1.updateTotalAmount(300);
console.log(order1.getTotalAmount()); // 300
console.log(order1._totalAmount); // Undefined (Encapsulation!)


// 🚀 2. Abstraction (Hiding Payment Processing Details)
class Payment {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }

    // Private Method (Backend process)
    _processPayment() {
        return "Payment successful!";
    }

    pay() {
        return `Order ID: ${this.orderId}, Amount: $${this.amount}. ${this._processPayment()}`;
    }
}

const payment1 = new Payment(101, 250);
console.log(payment1.pay()); // Order ID: 101, Amount: $250. Payment successful!
console.log(payment1._processPayment()); // Undefined (Cannot Access!)


// 🚀 3. Inheritance (Different User Roles: Customer & Restaurant Owner)

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}

// Customer Class (Child of User)
class Customer extends User {
    constructor(name, email, orders) {
        super(name, email);
        this.orders = orders;
    }

    getOrderHistory() {
        return `${this.name} has placed ${this.orders} orders.`;
    }
}

// Restaurant Owner Class (Child of User)
class RestaurantOwner extends User {
    constructor(name, email, restaurantName) {
        super(name, email);
        this.restaurantName = restaurantName;
    }

    manageOrders() {
        return `${this.restaurantName} is managing orders.`;
    }
}

const customer1 = new Customer("Yesu Balan", "yesu@example.com", 5);
console.log(customer1.getDetails()); // User: Yesu Balan, Email: yesu@example.com
console.log(customer1.getOrderHistory()); // Yesu Balan has placed 5 orders.

const owner1 = new RestaurantOwner("Rock Lee", "rock@example.com", "Lee's Kitchen");
console.log(owner1.getDetails()); // User: Rock Lee, Email: rock@example.com
console.log(owner1.manageOrders()); // Lee's Kitchen is managing orders.

// 🚀 4. Polymorphism (Different Delivery Options)

class Delivery {
    getDeliveryTime() {
        return "Delivery time not available!";
    }
}

// Regular Delivery
class RegularDelivery extends Delivery {
    getDeliveryTime() {
        return "Your order will be delivered in 40-50 minutes.";
    }
}

// Express Delivery
class ExpressDelivery extends Delivery {
    getDeliveryTime() {
        return "Your order will be delivered in 20 minutes.";
    }
}

const regularOrder = new RegularDelivery();
console.log(regularOrder.getDeliveryTime()); // Your order will be delivered in 40-50 minutes.

const expressOrder = new ExpressDelivery();
console.log(expressOrder.getDeliveryTime()); // Your order will be delivered in 20 minutes.
