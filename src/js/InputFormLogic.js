
import { CreditCardValidatorNumber } from './CreditCardValidatorNumber';

import cardNumberFormats from './data';

const data = cardNumberFormats.cardNumberFormats;

const myForm = document.getElementById('add-form');

const section = document.createElement('section');
section.classList.add('container');
const body = document.querySelector('body');
body.appendChild(section);

export function InputFormLogic() {
   myForm.addEventListener('input', function (event) {
      const cardNumber = data.find(function (item) {
         const result = item.startsWith.some((num) => {
            return String(event.target.value).startsWith(num);
         });
         if (CreditCardValidatorNumber(event.target.value) && result) {
            return item;
         }
      });
      console.log("🚀 ~ file: InputFormLogic.js:38 ~ cardNumber ~ cardNumber:", cardNumber)
   });
}
