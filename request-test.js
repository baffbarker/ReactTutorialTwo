'use strict'

const axios = require('axios');

const book = {
    'author': 'Charles Dickens',
    'title': 'Fucking Awful Expectations',
    'published': '1861-01-01'
  };

axios.put('http://localhost:3000/books/3', book)
.then(response => {
  console.log(response);
})
.catch(error => {
    console.log(error);
});

