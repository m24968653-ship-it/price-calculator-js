// Function to calculate final product price
function calculateFinalPrice(price, tax, discount) {

    let priceWithTax = price + tax;      // add tax
    let finalPrice = priceWithTax - discount; // subtract discount

    return finalPrice;
}

// Example products

let phonePrice = calculateFinalPrice(1000, 100, 50);
let laptopPrice = calculateFinalPrice(2000, 200, 150);
let headphonesPrice = calculateFinalPrice(300, 30, 20);
let electricScooterPrice = calculateFinalPrice(500, 60, 80);
let playstation4Price = calculateFinalPrice(700, 90, 70);
let playstation5Price = calculateFinalPrice(1500, 250, 150);

// Print results

console.log("Phone Final Price:", phonePrice);
console.log("Laptop Final Price:", laptopPrice);
console.log("Headphones Final Price:", headphonesPrice);
console.log("Elctric Scooter Final Price:", electricScooterPrice);
console.log("Playstation4 Final Price:", playstation4Price);
console.log("Playstation5 Final Price:", playstation5Price)