const data = [
{
  code: "SAVE10AMZ",
  discount: 10,
  expirationDate: "2026-06-30",
  merchant: "Amazon",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 99,
  description: "Get exciting savings with this exclusive 10% discount coupon for Amazon. Ideal for shoppers looking to save on electronics, fashion, and daily essentials. This limited-time offer ensures maximum value on your purchases. Use it before expiry and enjoy a smooth and rewarding shopping experience with great deals."
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
  description: "Unlock great deals with this 20% discount coupon for Flipkart. Perfect for buying electronics, clothing, and home essentials at reduced prices. This coupon helps you maximize savings while shopping from a trusted platform. Don’t miss this opportunity to grab premium products at affordable rates before it expires."
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
  description: "Enjoy stylish savings with this 15% off coupon for Myntra. Shop for trendy fashion, accessories, and lifestyle products at discounted prices. This deal is perfect for fashion enthusiasts who love premium brands at lower costs. Use this coupon before expiration and upgrade your wardrobe affordably."
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
  description: "Save on beauty and wellness with this 12% discount coupon for Nykaa. Ideal for purchasing skincare, cosmetics, and personal care products at better prices. This limited-time offer helps you maintain your beauty routine without overspending. Grab this deal now and enjoy premium products at reduced cost."
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
  description: "Enjoy delicious meals at lower prices with this 25% discount coupon for Swiggy. Perfect for ordering your favorite food from top restaurants. This offer ensures great savings while enjoying quality meals at home. Use it before it expires and make your food ordering experience more affordable."
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
  description: "Get tasty savings with this 18% off coupon for Zomato. Order from your favorite restaurants and enjoy discounts on every meal. This coupon is perfect for food lovers who want quality meals at affordable prices. Make the most of this limited-time deal before it expires."
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
  description: "Shop smart with this 22% discount coupon for Ajio. Explore a wide range of fashion and lifestyle products at discounted prices. This offer is perfect for customers looking for trendy outfits at lower costs. Use this coupon before it expires and enjoy affordable fashion shopping."
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
  description: "Get huge savings with this 30% off coupon for Meesho. Ideal for budget shoppers looking for affordable clothing, accessories, and home products. This deal helps maximize value on every purchase. Grab this limited-time offer now and enjoy cost-effective shopping on popular items."
},
{
  code: "BIGBASKET15",
  discount: 15,
  expirationDate: "2026-04-18",
  merchant: "BigBasket",
  isActive: true,
  purchased: false,
  provider: "69c4222f38368d850daa1b6b",
  price: 115,
  description: "Save on groceries with this 15% discount coupon for BigBasket. Perfect for buying daily essentials, fruits, and vegetables at reduced prices. This coupon ensures convenience and savings on every order. Use it before expiry and enjoy hassle-free grocery shopping from home."
},
{
  code: "DOMINOS20",
  discount: 20,
  expirationDate: "2026-03-28",
  merchant: "Dominos",
  isActive: true,
  purchased: false,
  provider: "69c4227b38368d850daa1b6d",
  price: 135,
  description: "Enjoy your favorite pizzas at discounted prices with this 20% coupon for Dominos. Perfect for parties or casual meals with friends and family. This offer helps you save while enjoying delicious food. Don’t miss out on this tasty deal before it expires."
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
  description: "Grab this 30% discount coupon for PizzaHut and enjoy delicious pizzas at reduced prices. Ideal for food lovers who want premium taste without high cost. This limited-time deal ensures maximum savings. Use it before expiration and make your meals more enjoyable and affordable."
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
  description: "Save on rides with this 10% discount coupon for Uber. Perfect for daily commutes or travel needs at reduced cost. This coupon ensures comfortable rides while saving money. Use it before expiry and make your transportation more affordable and convenient."
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
  description: "Enjoy affordable rides with this 12% off coupon for Ola. Ideal for city travel and daily commuting needs. This offer helps you save money while enjoying reliable transportation services. Use this coupon before expiration and make every ride more budget-friendly."
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
  description: "Get cashback benefits with this 15% discount coupon for Paytm. Perfect for bill payments, recharges, and online transactions. This coupon helps you save on everyday digital payments. Use it before expiry and enjoy seamless and cost-effective online services."
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
  description: "Save on medicines and healthcare products with this 20% discount coupon for PharmEasy. Ideal for ordering essentials at discounted prices. This offer ensures affordability and convenience. Use it before expiration and take care of your health while saving money."
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
  description: "Upgrade your eyewear collection with this 18% discount coupon for Lenskart. Perfect for buying stylish glasses and lenses at lower prices. This deal ensures quality and affordability. Use this coupon before expiry and enhance your vision with premium products."
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
  description: "Get amazing deals on audio products with this 25% discount coupon for Boat. Perfect for buying headphones, speakers, and accessories at reduced prices. This offer ensures high-quality products at affordable rates. Use it before expiration and enjoy premium sound experience."
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
  description: "Shop premium brands at discounted prices with this 14% coupon for TataCliq. Ideal for fashion, electronics, and lifestyle products. This offer ensures savings on quality items. Use this coupon before it expires and enjoy a better shopping experience."
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
  description: "Save on baby products with this 20% discount coupon for FirstCry. Perfect for parents looking to buy essentials at lower prices. This deal ensures affordability and quality. Use it before expiry and provide the best for your child while saving money."
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
  description: "Enjoy great deals with this 16% discount coupon for Snapdeal. Ideal for shopping a variety of products at reduced prices. This coupon helps you save more on everyday purchases. Use it before expiration and make your shopping experience more rewarding."
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