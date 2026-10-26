const groomingfee = 50;
const numberOfPets = 2;
const gstrate = 0.09;

const subtotal = groomingfee * numberOfPets;
const gst = subtotal * gstrate;
const total = subtotal + gst;

const message = "The total cost is $" + total;

console.log(message);