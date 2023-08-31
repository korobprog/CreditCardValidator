import './css/styles.css';
import { CreditCardValidatorNumber } from "./js/CreditCardValidatorNumber";
import cardNumberFormats from "./js/data"

const data = cardNumberFormats.cardNumberFormats
const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener("change", (event) => {
   const value = event.target.value

   button.addEventListener('click', (event) => {
      event.preventDefault
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
   });
})







