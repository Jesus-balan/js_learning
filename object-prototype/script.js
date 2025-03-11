// Step 1: Create a Base Object for Ride Booking

let Ride = {
    init: function (riderName, pickup, destination, distance) {
        this.riderName = riderName;
        this.pickup = pickup;
        this.destination = destination;
        this.distance = distance;
    },

    calculateFare: function () {
        return this.distance * 10; // ₹10 per km
    },

    rideSummary: function () {
        return `${this.riderName} booked a ride from ${this.pickup} to ${this.destination}. 
        Total Fare: ₹${this.calculateFare()}`;
    }
};


// Step 2: Create Specific Ride Types Using Prototypes

let ride1 = Object.create(EconomyRide);
ride1.init("Yesu Balan", "Chennai Central", "T Nagar", 10);
console.log(ride1.rideSummary()); 

// Output:
// Yesu Balan booked a ride from Chennai Central to T Nagar. 
// Total Fare: ₹80

let ride2 = Object.create(PremiumRide);
ride2.init("Rock Lee", "Chennai Airport", "Marina Beach", 15);
console.log(ride2.rideSummary());

// Output:
// Rock Lee booked a ride from Chennai Airport to Marina Beach. 
// Total Fare: ₹225
