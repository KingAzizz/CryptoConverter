const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const PORT = 5000
app.use(cors())
require('dotenv').config()


app.get('/convert',(req,res) => {
    
    const fromCurrency= req.query.from_currency
    const toCurrency= req.query.to_currency
        const options = {
          method: "GET",
          url: "https://alpha-vantage.p.rapidapi.com/query",
          params: {
            from_currency: fromCurrency,
            function: "CURRENCY_EXCHANGE_RATE",
            to_currency: toCurrency,
          },
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPID_API_KEY,
          },
        };
    
        axios
          .request(options)
          .then((response) => {
              res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
              res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
          })
          .catch((error) => {
            console.error(error);
          });
        

})

app.get('/news' , (req,res) => {
    
    const options = {
        method: "GET",
        url: "https://crypto-news-live.p.rapidapi.com/news/coindesk",
        headers: {
          "x-rapidapi-host": "crypto-news-live.p.rapidapi.com",
            'x-rapidapi-key': process.env.RAPID_API_KEY
        },
      };
  
      axios
        .request(options)
        .then((response) => {
          res.json(response.data)
          
        })
        .catch((error) => {
          console.error(error);
        });
})

app.listen(PORT,() => console.log('server up'))
