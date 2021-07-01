import axios from 'axios'
import { response } from 'express';
import md5 from "md5";
import { apiKeyTest, baseUrlTest, listIdTest } from './constants.js';

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    // middleware example uses next function
    console.log(` Request from: ${req.originalUrl}`)
    console.log(` Request type: ${req.method}`)
    next();
  }, (req, res, next) => {
    res.send('GET request successful!')
  })

  .post((req, res) =>
  res.status(201).send('POST request successful!'));

  app.route('/contact/:contactID')
  .put((req, res) =>
  res.send("PUT request successful"))

  .delete((req, res) =>
  res.send("DELETE request successful"))

  //can be used for INSERT or UPDATE
  app.route('/addUser/:email_address')
  .put(async (req, res) => {
    const {email_address} = req.params
    const subscriber_hash = md5(email_address)
    const url = `${baseUrlTest}/lists/${listIdTest}/members/${subscriber_hash}`

    const data = {
      email_address,
      status_if_new: 'subscribed',
      subscriber_hash
    }

    const headers = {
        "authorization": `Bearer ${apiKeyTest}`,
        'Accept': 'application/json',
        'content-type': 'application/json'
      }

    console.log('data: ', data)
    if (email_address) {
      axios.put( url, data, { headers }).then(response => {
        console.log('response', response.data)
        res.send(response.data)
      }).catch( error => {
        console.log('error: ', error)
        res.send(error.message)
        })
    }
  })
}


export default routes
