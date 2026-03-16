const data = [
  {
    "code": "SAVE10AMZ",
    "discount": 10,
    "expirationDate": "2026-06-30",
    "merchant": "Amazon"
  },
  {
    "code": "FLIP20OFF",
    "discount": 20,
    "expirationDate": "2026-05-15",
    "merchant": "Flipkart"
  },
  {
    "code": "MYNTRA15",
    "discount": 15,
    "expirationDate": "2026-04-20",
    "merchant": "Myntra"
  },
  {
    "code": "NYKAA12",
    "discount": 12,
    "expirationDate": "2026-07-10",
    "merchant": "Nykaa"
  },
  {
    "code": "SWIGGY25",
    "discount": 25,
    "expirationDate": "2026-04-01",
    "merchant": "Swiggy"
  },
  {
    "code": "ZOMATO18",
    "discount": 18,
    "expirationDate": "2026-03-31",
    "merchant": "Zomato"
  },
  {
    "code": "AJIO22",
    "discount": 22,
    "expirationDate": "2026-06-12",
    "merchant": "Ajio"
  },
  {
    "code": "MEESHO30",
    "discount": 30,
    "expirationDate": "2026-05-25",
    "merchant": "Meesho"
  },
  {
    "code": "BIGBASKET15",
    "discount": 15,
    "expirationDate": "2026-04-18",
    "merchant": "BigBasket"
  },
  {
    "code": "DOMINOS20",
    "discount": 20,
    "expirationDate": "2026-03-28",
    "merchant": "Dominos"
  },
  {
    "code": "PIZZA30",
    "discount": 30,
    "expirationDate": "2026-05-30",
    "merchant": "PizzaHut"
  },
  {
    "code": "UBER10",
    "discount": 10,
    "expirationDate": "2026-07-01",
    "merchant": "Uber"
  },
  {
    "code": "OLA12",
    "discount": 12,
    "expirationDate": "2026-06-05",
    "merchant": "Ola"
  },
  {
    "code": "PAYTM15",
    "discount": 15,
    "expirationDate": "2026-04-25",
    "merchant": "Paytm"
  },
  {
    "code": "PHARMEASY20",
    "discount": 20,
    "expirationDate": "2026-05-12",
    "merchant": "PharmEasy"
  },
  {
    "code": "LENSKART18",
    "discount": 18,
    "expirationDate": "2026-06-20",
    "merchant": "Lenskart"
  },
  {
    "code": "BOAT25",
    "discount": 25,
    "expirationDate": "2026-07-15",
    "merchant": "Boat"
  },
  {
    "code": "TATACLIQ14",
    "discount": 14,
    "expirationDate": "2026-04-29",
    "merchant": "TataCliq"
  },
  {
    "code": "FIRSTCRY20",
    "discount": 20,
    "expirationDate": "2026-05-22",
    "merchant": "FirstCry"
  },
  {
    "code": "SNAPDEAL16",
    "discount": 16,
    "expirationDate": "2026-06-11",
    "merchant": "Snapdeal"
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