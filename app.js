/* eslint-disable no-unused-vars */
'use strict';

const productAnchor = document.querySelectorAll('.box1');
const homeAnchor = document.querySelector('#HOME');
const cartAnchor = document.querySelector('#CART');
const contactAnchor = document.querySelector('#CONTACT');
const searchAnchor = document.querySelector('#SEARCH');

function myFunction() {
  console.log('it was clicked');
}

productAnchor.addEventListener('click', e => {
  console.log('it was clicked'), false;
});

