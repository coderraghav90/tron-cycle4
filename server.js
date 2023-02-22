const express = require('express');
const TronWeb = require('tronweb');
const bodyParser = require('body-parser')
const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode = new HttpProvider("https://tron-cycle-oppppo.vercel.app");
const solidityNode = new HttpProvider("https://tron-cycle-oppppo.vercel.app");
const eventServer = new HttpProvider("https://tron-cycle-oppppo.vercel.app");

const app = express();
app.use(bodyParser.json())

app.post('/keys', async (req, res) => {
    try {
        const { privateKey,CONTRACT,ACCOUNT } = req.body;
        const tronWeb = new TronWeb(fullNode, privateKey);
        const balance = await tronWeb.trx.getBalance(ACCOUNT);
        console.log("balance:", balance);
        res.status(200).json({balance});
         } catch (e) {
            res.status(400).json({error: e});
            console.log(e)
        }
    })
app.listen(process.env.PORT || 3000)
