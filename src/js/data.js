import visa from '../image/flat-rounded/visa.svg';
import mastercard from '../image/flat-rounded/mastercard.svg';
import amex from '../image/flat-rounded/amex.svg';
import discover from '../image/flat-rounded/discover.svg';
import jcb from '../image/flat-rounded/jcb.svg';
import diners from '../image/flat-rounded/diners.svg';
import mir from '../image/flat-rounded/mir.svg';

const cardNumberFormats = [
   { title: 'amex', startsWith: [34, 37], length: [15], imagecard: amex },
   { title: 'visa', startsWith: [4], length: [13, 16, 19], imagecard: visa },
   {
      title: 'mastercard',
      startsWith: [
         51,
         52,
         53,
         54,
         55,
         ...Array.from(Array(49999).keys(), (x) => x + 222100)
      ],
      length: [16, 17, 18, 19],
      imagecard: mastercard,
   },
   {
      title: 'discover',
      startsWith: [
         65,
         644,
         645,
         646,
         647,
         648,
         649,
         6011,
         ...Array.from(Array(799).keys(), (x) => x + 622126)
      ],
      length: [16, 17, 18, 19],
      imagecard: discover,
   },
   {
      title: 'jcb',
      startsWith: [...Array.from(Array(61).keys(), (x) => x + 3528)],
      length: [16, 17, 18, 19],
      imagecard: jcb
   },
   {
      title: 'diners',
      startsWith: [
         54,
         36,
         300,
         301,
         302,
         303,
         304,
         305
      ],
      length: [14, 16],
      imagecard: diners
   },
   {
      title: 'mir',
      startsWith: [2200, 2201, 2202, 2203, 2204],
      length: [16],
      imagecard: mir
   }
];

export default { cardNumberFormats };
