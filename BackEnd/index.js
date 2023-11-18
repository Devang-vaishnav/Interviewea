import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const itemList = [{
    itemName : "Rice",
    unitPrice : 24,
    quantity : 5,
    isPurchased : false
},
{
    itemName : "Potato",
    unitPrice : 30,
    quantity : 4,
    isPurchased : false
},
{
    itemName : "Soap",
    unitPrice : 60,
    quantity : 2,
    isPurchased : false
},
{
    itemName : "Maggie",
    unitPrice : 15,
    quantity : 4,
    isPurchased : false
},
{
    itemName : "Apple",
    unitPrice : 200,
    quantity : 1,
    isPurchased : false
}]

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    let reply = {
        success : 200,
        data : itemList,
    };
    res.send(reply);
});


app.listen(port, (req,res) => {
    console.log('Our Server is now Running on Port ' + port);
});