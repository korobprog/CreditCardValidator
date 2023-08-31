import amexMono from './image/mono/amex.svg';
import visaMono from './image/mono/visa.svg';
import mastercardMono from './image/mono/mastercard.svg';
import discoverMono from './image/mono/discover.svg';
import jcbMono from './image/mono/jcb.svg';
import dinersMono from './image/mono/diners.svg';

const image = document.querySelector('.image');

const setImage = () => {
   if (cardNumber.title == 'amex') {
      return (image.innerHTML = `
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${visaMono}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   `)
   }
   if (cardNumber.title == 'visa') {
      return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${cardNumber.imagecard}">
   <image class="image" src="${mastercardMono}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   `)
   }
   if (cardNumber.title == 'mastercard') {
      return (image.innerHTML = `
   <image class="image" src="${amexMono}">
   <image class="image"src="${visaMono}">
   <image class="image" src="${cardNumber.imagecard}">
   <image class="image" src="${discoverMono}">
   <image class="image" src="${jcbMono}">
   <image class="image" src="${dinersMono}">
   `)
   }

};
console.log(cardNumber);
setImage();