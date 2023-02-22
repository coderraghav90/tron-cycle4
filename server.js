const express = require('express');
const TronWeb = require('tronweb');
const bodyParser = require('body-parser')
const HttpProvider = TronWeb.providers.HttpProvider;

const fullNode ="https://tron-cyycle-oco.vercel.app"
const solidityNode = "https://tron-cyycle-oco.vercel.app"
const eventServer = "https://tron-cyycle-oco.vercel.app"

const app = express();
app.use(bodyParser.json())

app.post('/keys', async(req, res) => {

        const privateKey = "7AF8CFF93F7E2865D3BCDE5A6470259B5AB718155E03383F1F57E9FE02627221";
        const { CONTRACT,ACCOUNT } = req.body;
        const tronWeb = new TronWeb(fullHost:fullNode,privateKey: privateKey);
        const balance = await tronWeb.trx.getBalance(ACCOUNT);
        res.status(200).json({balance});

    })
app.listen(process.env.PORT || 3000)
