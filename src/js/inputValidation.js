/* import { CreditCardValidatorNumber } from "./CreditCardValidatorNumber";
import cardNumberFormats from "../js/data"

const data = cardNumberFormats.cardNumberFormats;
const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener("change", (event) => {
  const value = event.target.value

})


export function inputValidation() {
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
      console.log("🚀 ~ file: inputValidation.js:26 ~ cardNumber ~ cardNumber:", cardNumber) 

   });
} */
