import { CreditCardValidatorNumber } from "./CreditCardValidatorNumber"
const myForm = document.getElementById("add-form")

export function InputForm() {

   myForm.addEventListener('input', function (event) {

      console.log(CreditCardValidatorNumber(event.target.value))
     
   })
}
