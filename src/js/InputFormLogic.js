import visamono from '../image/mono/visa.svg';

import mastercardmono from '../image/mono/mastercard.svg';

import amexmono from '../image/mono/amex.svg';

import discovermono from '../image/mono/discover.svg';

import jcbmono from '../image/mono/jcb.svg';

import dinersmono from '../image/mono/diners.svg';

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
         // Сравнение по начальным цифрам
  //const result = item.startsWith.some(num => { return String(event.target.value).substring(0, String(num).length) == String(num);
  // через метод startsWith
         const result = item.startsWith.some(num => {
            return String(event.target.value).startsWith(num);
         })
         // если все совпадает то выводим объект
         if (CreditCardValidatorNumber(event.target.value) && result) {
            return item
         }
      });
      console.log("🚀 ~ file: InputFormLogic.js:45 ~ cardNumber ~ cardNumber:", cardNumber)

      const image = `
   <image src=${visamono} class="image">
   <image src=${mastercardmono} class="image">
   <image src=${amexmono} class="image">
   <image src=${discovermono} class="image">
   <image src=${jcbmono} class="image">
   <image src=${dinersmono} class="image">
   `;
      section.innerHTML = image;
   });
}
