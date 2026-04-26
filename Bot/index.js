import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

const delay = (ms) => new Promise(res => setTimeout(res, ms));

app.post('/run-bot', async(req, res) => {
    const { productId, couponCode } = req.body;
    
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto("http://localhost:5173/products");
        await delay(1500); 

        await page.click(`[data-buy-id="${productId}"]`);
        await delay(1500);

        await page.waitForSelector('#coupon');

        await page.type('#coupon', couponCode);
        await delay(1500);

        await page.click('.verify');
        await delay(1500);
        
        const result = await page.$eval('#result', el => el.innerText );

        await browser.close();

        res.status(200).json({
            success: true,
            err: {},
            data: result,
            message: "The bot checked the coupon code successfully.",
            
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: {},
            error: error,
            message:"The bot failed to check coupon code."
        })
    }
});


app.listen(5055, (req, res)=>{
    console.log("The bot server started successfully on port 5055.");
})