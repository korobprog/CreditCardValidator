import './css/styles.css';
import { CreditCardValidatorNumber } from "./js/CreditCardValidatorNumber";
import cardNumberFormats from "./js/data"

import amexMono from './image/mono/amex.svg';
import visaMono from './image/mono/visa.svg';
import mastercardMono from './image/mono/mastercard.svg';
import discoverMono from './image/mono/discover.svg';
import jcbMono from './image/mono/jcb.svg';
import dinersMono from './image/mono/diners.svg';
import mirMono from './image/mono/mir.svg';

const data = cardNumberFormats.cardNumberFormats
const input = document.querySelector('input');
const button = document.querySelector('button');
const image = document.querySelector('.image');

image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image" src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}"> 
   <image class="image" src="${mirMono}"> 
   
   `


input.addEventListener("change", (event) => {
   const value = event.target.value
   button.addEventListener('click', (event) => {
      event.preventDefault()
      const cardNumber = data.find(function (item) {
         const result = item.startsWith.some((num) => {
            return value.startsWith(num);
         });

         if (CreditCardValidatorNumber(value) && result) {
            return item;
         }
      });
      console.log("🚀 ~ file: index.js:23 ~ cardNumber ~ cardNumber:", cardNumber)
      console.log("🚀 ~ file: inputValidation.js:26 ~ cardNumber ~ cardNumber:", cardNumber)

      try {
         if (cardNumber.title == 'amex') {
            return (image.innerHTML = `
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${mirMono}"> 
   `
            )
         }
         if (cardNumber.title == 'visa') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${cardNumber.imagecard}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${mirMono}"> 
   `)
         }
         if (cardNumber.title == 'mastercard') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${mirMono}"> 
   `)
         }
         if (cardNumber.title == 'discover') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${mirMono}"> 
   `)
         }
         if (cardNumber.title == 'jcb') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${mirMono}"> 
   `)
         }
         if (cardNumber.title == 'diners') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${mirMono}"> 
   `)
         }
         if (cardNumber.title == 'mir') {
            return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${dinersMono}">
   <image class="image" src="${cardNumber.imagecard}"> 
   `)
         }

      } catch (info) {
         alert("Нет совпадений")
      }
   });

})










