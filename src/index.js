import './css/styles.css';
import { CreditCardValidatorNumber } from "./js/CreditCardValidatorNumber"
import { InputForm } from "./js/InputForm"

const input = InputForm()
const inputCard = CreditCardValidatorNumber(input)
console.log("🚀 ~ file: index.js:5 ~ inputCard:", inputCard)
