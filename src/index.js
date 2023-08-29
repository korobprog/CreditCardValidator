import './css/styles.css';
import { CreditCardValidatorNumber } from "./js/CreditCardValidatorNumber"
import { InputFormLogic } from "./js/InputFormLogic"
import { ImagesLogic } from './js/ImagesLogic';

const input = InputFormLogic()
console.log("🚀 ~ file: index.js:7 ~ input:", input)
const inputCard = CreditCardValidatorNumber()
console.log("🚀 ~ file: index.js:9 ~ inputCard:", inputCard)
const images = ImagesLogic()
console.log("🚀 ~ file: index.js:11 ~ images:", images)
