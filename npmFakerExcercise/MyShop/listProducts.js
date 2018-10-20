var faker = require('faker');
console.log("No.    Product Name                       Product Number");
for( var i=1;i<11;i++){

console.log(i + ".)    " +faker.commerce.productName() + "                 " + faker.random.number());    
}
