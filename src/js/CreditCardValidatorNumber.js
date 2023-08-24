export function CreditCardValidatorNumber(input) {
   let creditCardInt = input.split("").map(Number);
   for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
      let tempValue = creditCardInt[i];

      tempValue = tempValue * 2;

      if (tempValue > 9) {
         tempValue = tempValue % 10 + 1;

      }
      creditCardInt[i] = tempValue;
   }

   let total = 0;
   for (let i = 0; i < creditCardInt.length; i++) {
      total += creditCardInt[i];
   }
   return total % 10 == 0;
}