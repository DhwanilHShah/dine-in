console.log('Hello Here!!!!');

client_id = '4lRCrTayGXbLhmJfQqW1ng';
api_key = 'zD5U2cZw3vYPqqLdUMSVyPTUzi4aDrr-A4yPyC75jgDOdPsmz4o7FwinuFGF1FC9BwlPwW7PVfuh-o5KlzVkRNVYQuV6FgLetV4gDvOy20pTrsDnF9fiGu1uWOE9Y3Yx';

'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const axios = require('axios');

app.use(express.static(process.cwd()+"/dist/webtech-8-sunit/"));
app.use(bodyParser.json());
app.use(cors())

app.get('/search/:keyword/:latitude/:longitude/:category/:distance', async(req, res) => {
    const head = {
        Authorization: 'Bearer zD5U2cZw3vYPqqLdUMSVyPTUzi4aDrr-A4yPyC75jgDOdPsmz4o7FwinuFGF1FC9BwlPwW7PVfuh-o5KlzVkRNVYQuV6FgLetV4gDvOy20pTrsDnF9fiGu1uWOE9Y3Yx'
    };
    try{
      let key = req.params.keyword;
      let lat = req.params.latitude;
    let longi = req.params.longitude;
    // let lat = '34.0223519';
    // let longi = '-118.285117';
    let category = req.params.category;
    let dist = Math.round(parseFloat(req.params.distance)*1609.34);


    const resp = await axios.get('https://api.yelp.com/v3/businesses/search?term='+key+'&latitude='+lat+'&longitude='+longi+'&categories='+category+'&radius='+dist+'&limit=10', {headers: head});
    if (resp && resp.status && resp.data)
    {
        res.status(200).send(resp.data).end();
        console.log(res)
    }
    }
    catch(e){
      console.log(e);
    }
    
  });


  app.get('/business/:id', async(req, res) => {
    const head = {
        Authorization: 'Bearer zD5U2cZw3vYPqqLdUMSVyPTUzi4aDrr-A4yPyC75jgDOdPsmz4o7FwinuFGF1FC9BwlPwW7PVfuh-o5KlzVkRNVYQuV6FgLetV4gDvOy20pTrsDnF9fiGu1uWOE9Y3Yx'
    };
    try{
      let id = req.params.id;

    const resp = await axios.get('https://api.yelp.com/v3/businesses/'+id, {headers: head});
    if (resp && resp.status && resp.data)
    {
        res.status(200).send(resp.data).end();
        console.log(res)
    }
    }
    catch(e){
      console.log(e);
    }
    
  });

  app.get('/reviews/:id', async(req, res) => {
    const head = {
        Authorization: 'Bearer zD5U2cZw3vYPqqLdUMSVyPTUzi4aDrr-A4yPyC75jgDOdPsmz4o7FwinuFGF1FC9BwlPwW7PVfuh-o5KlzVkRNVYQuV6FgLetV4gDvOy20pTrsDnF9fiGu1uWOE9Y3Yx'
    };
    try{
      let id = req.params.id;

    const resp = await axios.get('https://api.yelp.com/v3/businesses/'+id+'/reviews', {headers: head});
    if (resp && resp.status && resp.data)
    {
        res.status(200).send(resp.data).end();
        console.log(res)
    }
    }
    catch(e){
      console.log(e);
    }
    
  });

  app.get('/autocomplete/:keyword', async(req, res) => {
    const head = {
        Authorization: 'Bearer zD5U2cZw3vYPqqLdUMSVyPTUzi4aDrr-A4yPyC75jgDOdPsmz4o7FwinuFGF1FC9BwlPwW7PVfuh-o5KlzVkRNVYQuV6FgLetV4gDvOy20pTrsDnF9fiGu1uWOE9Y3Yx'
    };
    try{
      let key = req.params.keyword;

    const resp = await axios.get('https://api.yelp.com/v3/autocomplete?text='+key, {headers: head});
    if (resp && resp.status && resp.data)
    {
        res.status(200).send(resp.data).end();
        console.log(res)
    }
    }
    catch(e){
      console.log(e);
    }
    
  });

  let google_api = 'AIzaSyDtm0-KI1hArRb9K8YeAq4PPN3pJBqNHQM';

  app.get('/geocoding/:location', async(req, res) => {
    const head = {
        Authorization: 'Bearer AIzaSyDtm0-KI1hArRb9K8YeAq4PPN3pJBqNHQM'
    };
    try{
      let loc = req.params.location;

    const resp = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + '&key=' + google_api);
    if (resp && resp.status && resp.data)
    {

        // let temp = res.data.results[0].geometry.location.lat+" "+res.data.results[0].geometry.location.lng;
        res.status(200).send(resp.data).end();
        console.log(resp)
        // console.log(resp.data.results[0].geometry.location.lat);
        // console.log(resp.data.results[0].geometry.location.lng);

        // lat = data.results[0].geometry.location.lat;
        // longi = data.results[0].geometry.location.lng;
    }
    }
    catch(e){
      console.log(e);
    }
    
  });

app.get('/*', (req,res) => {
  res.sendFile(process.cwd()+"/dist/webtech-8-sunit/index.html")
});

const PORT = parseInt(process.env.PORT) || 8888;
app.listen(PORT, () => {
console.log(`App listening on port ${PORT}`);
console.log('Press Ctrl+C to quit.');
});


module.exports = app;