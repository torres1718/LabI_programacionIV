const axios = require('axios');
const fs = require('fs').promises;
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

 .then((resultado) => {
    console.log('Se extrajo la informacion sobre el precio del bitcoin');

        var datos = resultado.data.bpi;
        var value=[
            `${datos.USD.rate}, ${datos.USD.rate}`,
            `${datos.EUR.rate}, ${datos.EUR.rate}`,
            `GBP`+`${datos.GBP.rate}`,
        ]
        console.log(value);
       valores.forEach(valor => console.log(valor));
 
    })
