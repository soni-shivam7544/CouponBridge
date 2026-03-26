const data = [
{
  code: "AMZ10SAVE",
  discount: 10,
  expirationDate: "2026-06-30",
  merchant: "Amazon",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 99,
  description: "Get exciting savings with this exclusive 10% discount coupon for Amazon. Ideal for shoppers looking to save on electronics, fashion, and daily essentials. This limited-time offer ensures maximum value on your purchases.",
  productId: 1
},
{
  code: "FLIP20OFF",
  discount: 20,
  expirationDate: "2026-05-15",
  merchant: "Flipkart",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 149,
  description: "Unlock great deals with this 20% discount coupon for Flipkart. Perfect for buying electronics, clothing, and home essentials at reduced prices.",
  productId: 2
},
{
  code: "MYNTRA15",
  discount: 15,
  expirationDate: "2026-04-20",
  merchant: "Myntra",
  isActive: true,
  purchased: false,
  provider: "69c422ba38368d850daa1b6f",
  price: 120,
  description: "Enjoy stylish savings with this 15% off coupon for Myntra. Shop for trendy fashion, accessories, and lifestyle products at discounted prices.",
  productId: 3
},
{
  code: "NYKAA12",
  discount: 12,
  expirationDate: "2026-07-10",
  merchant: "Nykaa",
  isActive: true,
  purchased: false,
  provider: "69c4237138368d850daa1b71",
  price: 110,
  description: "Save on beauty and wellness with this 12% discount coupon for Nykaa. Ideal for purchasing skincare, cosmetics, and personal care products.",
  productId: 4
},
{
  code: "SWIGGY25",
  discount: 25,
  expirationDate: "2026-04-01",
  merchant: "Swiggy",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 160,
  description: "Enjoy delicious meals at lower prices with this 25% discount coupon for Swiggy. Perfect for ordering your favorite food from top restaurants.",
  productId: 5
},
{
  code: "ZOMATO18",
  discount: 18,
  expirationDate: "2026-03-31",
  merchant: "Zomato",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 140,
  description: "Get tasty savings with this 18% off coupon for Zomato. Order from your favorite restaurants and enjoy discounts on every meal.",
  productId: 6
},
{
  code: "AJIO22",
  discount: 22,
  expirationDate: "2026-06-12",
  merchant: "Ajio",
  isActive: true,
  purchased: false,
  provider: "69c422ba38368d850daa1b6f",
  price: 155,
  description: "Shop smart with this 22% discount coupon for Ajio. Explore a wide range of fashion and lifestyle products at discounted prices.",
  productId: 7
},
{
  code: "MEESHO30",
  discount: 30,
  expirationDate: "2026-05-25",
  merchant: "Meesho",
  isActive: true,
  purchased: false,
  provider: "69c4237138368d850daa1b71",
  price: 180,
  description: "Get huge savings with this 30% off coupon for Meesho. Ideal for budget shoppers looking for affordable products.",
  productId: 8
},
{
  code: "BB15SAVE",
  discount: 15,
  expirationDate: "2026-04-18",
  merchant: "BigBasket",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 115,
  description: "Save on groceries with this 15% discount coupon for BigBasket. Perfect for buying daily essentials at reduced prices.",
  productId: 9
},
{
  code: "DOM20OFF",
  discount: 20,
  expirationDate: "2026-03-28",
  merchant: "Dominos",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 135,
  description: "Enjoy your favorite pizzas at discounted prices with this 20% coupon for Dominos.",
  productId: 10
},

{
  code: "PIZZA30",
  discount: 30,
  expirationDate: "2026-05-30",
  merchant: "PizzaHut",
  isActive: true,
  purchased: false,
  provider: "69c422ba38368d850daa1b6f",
  price: 175,
  description: "Grab this 30% discount coupon for PizzaHut and enjoy delicious pizzas at reduced prices.",
  productId: 11
},
{
  code: "UBER10",
  discount: 10,
  expirationDate: "2026-07-01",
  merchant: "Uber",
  isActive: true,
  purchased: false,
  provider: "69c4237138368d850daa1b71",
  price: 90,
  description: "Save on rides with this 10% discount coupon for Uber.",
  productId: 12
},
{
  code: "OLA12",
  discount: 12,
  expirationDate: "2026-06-05",
  merchant: "Ola",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 95,
  description: "Enjoy affordable rides with this 12% off coupon for Ola.",
  productId: 13
},
{
  code: "PAYTM15",
  discount: 15,
  expirationDate: "2026-04-25",
  merchant: "Paytm",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 120,
  description: "Get cashback benefits with this 15% discount coupon for Paytm.",
  productId: 14
},
{
  code: "PHARMEASY20",
  discount: 20,
  expirationDate: "2026-05-12",
  merchant: "PharmEasy",
  isActive: true,
  purchased: false,
  provider: "69c422ba38368d850daa1b6f",
  price: 140,
  description: "Save on medicines and healthcare products with this 20% discount coupon for PharmEasy.",
  productId: 15
},
{
  code: "LENSKART18",
  discount: 18,
  expirationDate: "2026-06-20",
  merchant: "Lenskart",
  isActive: true,
  purchased: false,
  provider: "69c4237138368d850daa1b71",
  price: 130,
  description: "Upgrade your eyewear collection with this 18% discount coupon for Lenskart.",
  productId: 16
},
{
  code: "BOAT25",
  discount: 25,
  expirationDate: "2026-07-15",
  merchant: "Boat",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 160,
  description: "Get amazing deals on audio products with this 25% discount coupon for Boat.",
  productId: 17
},
{
  code: "TATACLIQ14",
  discount: 14,
  expirationDate: "2026-04-29",
  merchant: "TataCliq",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 110,
  description: "Shop premium brands at discounted prices with this 14% coupon for TataCliq.",
  productId: 18
},
{
  code: "FIRSTCRY20",
  discount: 20,
  expirationDate: "2026-05-22",
  merchant: "FirstCry",
  isActive: true,
  purchased: false,
  provider: "69c422ba38368d850daa1b6f",
  price: 135,
  description: "Save on baby products with this 20% discount coupon for FirstCry.",
  productId: 19
},
{
  code: "SNAPDEAL16",
  discount: 16,
  expirationDate: "2026-06-11",
  merchant: "Snapdeal",
  isActive: true,
  purchased: false,
  provider: "69c4237138368d850daa1b71",
  price: 125,
  description: "Enjoy great deals with this 16% discount coupon for Snapdeal.",
  productId: 20
}
];

const mongoose = require('mongoose');
const Coupon = require('../Models/coupon.model.js');

mongoose.connect('mongodb://localhost:27017/couponbridge')
    .then( async()=> {
        console.log("Connected to MongoDB");
        await Coupon.insertMany(data);
        console.log("Data inserted successfully");

    })
    .catch( (error)=> {
        console.log("Error occured connecting to MongoDB:", error);
    });