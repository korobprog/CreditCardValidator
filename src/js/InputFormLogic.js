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
      // true - алгоритм
      //console.log(CreditCardValidatorNumber(event.target.value))
      // карта пользователя
      //console.log(event.target.value)

      const cardNumber = data.find(function (item, index) {
         console.log(`${item.title} ${item.imagecard}`)
         // Сравнение по начальным цифрам
         const resultnum = String(event.target.value).startsWith(item.startsWith);
         // если все совпадает то должна аоявится ссылка на картинку карты
         if (CreditCardValidatorNumber(event.target.value) && resultnum && event.target.value === item.length) {
            return item.imagecard[index]
         }
      });
      console.log("🚀 ~ file: InputFormLogic.js:43 ~ cardNumber ~ cardNumber:", cardNumber)



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
