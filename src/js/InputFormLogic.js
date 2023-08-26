
import visamono from "../image/mono/visa.svg"

import mastercard from "../image/flat-rounded/mastercard.svg"

import amex from "../image/flat-rounded/amex.svg"

import discover from "../image/flat-rounded/discover.svg"

import jcb from "../image/flat-rounded/jcb.svg"

import diners from "../image/flat-rounded/diners.svg"


import { CreditCardValidatorNumber } from "./CreditCardValidatorNumber"


const myForm = document.getElementById("add-form")

export function InputFormLogic() {
   myForm.addEventListener('input', function (event) {
      console.log(CreditCardValidatorNumber(event.target.value))
      console.log(event.target.value)
   })
   const section = document.createElement("section");
   section.classList.add("container");
   const body = document.querySelector('body')
   body.appendChild(section)

   const image = `
   <image src=${visamono} class="image">
   <image src=${mastercard} class="image">
   <image src=${amex} class="image">
   <image src=${discover} class="image">
   <image src=${jcb} class="image">
   <image src=${diners} class="image">
   `
   section.innerHTML = image

}

