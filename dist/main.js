/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/CreditCardValidatorNumber.js
function CreditCardValidatorNumber(input) {
  var creditCardInt = input.split("").map(Number);
  for (var i = creditCardInt.length - 2; i >= 0; i = i - 2) {
    var tempValue = creditCardInt[i];
    tempValue = tempValue * 2;
    if (tempValue > 9) {
      tempValue = tempValue % 10 + 1;
    }
    creditCardInt[i] = tempValue;
  }
  var total = 0;
  for (var _i = 0; _i < creditCardInt.length; _i++) {
    total += creditCardInt[_i];
  }
  return total % 10 == 0;
}
;// CONCATENATED MODULE: ./src/image/flat-rounded/visa.svg
const visa_namespaceObject = __webpack_require__.p + "7e2e09f9eef0599e0a57.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/mastercard.svg
const mastercard_namespaceObject = __webpack_require__.p + "af8851abdfa16592eff9.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/amex.svg
const amex_namespaceObject = __webpack_require__.p + "557acb7ed50c269cffde.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/discover.svg
const discover_namespaceObject = __webpack_require__.p + "42e5cc0429e5a73c9621.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/jcb.svg
const jcb_namespaceObject = __webpack_require__.p + "7440c0795ac7597be9d0.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/diners.svg
const diners_namespaceObject = __webpack_require__.p + "16ee6f0019446b804883.svg";
;// CONCATENATED MODULE: ./src/image/flat-rounded/mir.svg
const mir_namespaceObject = __webpack_require__.p + "dd7c32f58bac8d654025.svg";
;// CONCATENATED MODULE: ./src/js/data.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







var cardNumberFormats = [{
  title: 'amex',
  startsWith: [34, 37],
  length: [15],
  imagecard: amex_namespaceObject
}, {
  title: 'visa',
  startsWith: [4],
  length: [13, 16, 19],
  imagecard: visa_namespaceObject
}, {
  title: 'mastercard',
  startsWith: [51, 52, 53, 54, 55].concat(_toConsumableArray(Array.from(Array(49999).keys(), function (x) {
    return x + 222100;
  }))),
  length: [16, 17, 18, 19],
  imagecard: mastercard_namespaceObject
}, {
  title: 'discover',
  startsWith: [65, 644, 645, 646, 647, 648, 649, 6011].concat(_toConsumableArray(Array.from(Array(799).keys(), function (x) {
    return x + 622126;
  }))),
  length: [16, 17, 18, 19],
  imagecard: discover_namespaceObject
}, {
  title: 'jcb',
  startsWith: _toConsumableArray(Array.from(Array(61).keys(), function (x) {
    return x + 3528;
  })),
  length: [16, 17, 18, 19],
  imagecard: jcb_namespaceObject
}, {
  title: 'diners',
  startsWith: [54, 36, 300, 301, 302, 303, 304, 305],
  length: [14, 16],
  imagecard: diners_namespaceObject
}, {
  title: 'mir',
  startsWith: [2200, 2201, 2202, 2203, 2204],
  length: [16],
  imagecard: mir_namespaceObject
}];
/* harmony default export */ const data = ({
  cardNumberFormats: cardNumberFormats
});
;// CONCATENATED MODULE: ./src/image/mono/amex.svg
const mono_amex_namespaceObject = __webpack_require__.p + "ee7578aeb5d45ce64759.svg";
;// CONCATENATED MODULE: ./src/image/mono/visa.svg
const mono_visa_namespaceObject = __webpack_require__.p + "129221466789b2ece8e0.svg";
;// CONCATENATED MODULE: ./src/image/mono/mastercard.svg
const mono_mastercard_namespaceObject = __webpack_require__.p + "f883d5c24bad75547a55.svg";
;// CONCATENATED MODULE: ./src/image/mono/discover.svg
const mono_discover_namespaceObject = __webpack_require__.p + "3a3f7aebfabd6fc3550e.svg";
;// CONCATENATED MODULE: ./src/image/mono/jcb.svg
const mono_jcb_namespaceObject = __webpack_require__.p + "7e95a622d866ae17bf8e.svg";
;// CONCATENATED MODULE: ./src/image/mono/diners.svg
const mono_diners_namespaceObject = __webpack_require__.p + "42bbe60c7d2275efe01e.svg";
;// CONCATENATED MODULE: ./src/image/mono/mir.svg
const mono_mir_namespaceObject = __webpack_require__.p + "bafeaeb1a9d4a259bc59.svg";
;// CONCATENATED MODULE: ./src/index.js










var src_data = data.cardNumberFormats;
var input = document.querySelector('input');
var src_button = document.querySelector('button');
var src_image = document.querySelector('.image');
src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\"> \n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   \n   ");
input.addEventListener("change", function (event) {
  var value = event.target.value;
  src_button.addEventListener('click', function (event) {
    event.preventDefault();
    var cardNumber = src_data.find(function (item) {
      var result = item.startsWith.some(function (num) {
        return value.startsWith(num);
      });
      if (CreditCardValidatorNumber(value) && result) {
        return item;
      }
    });
    console.log("🚀 ~ file: index.js:23 ~ cardNumber ~ cardNumber:", cardNumber);
    console.log("🚀 ~ file: inputValidation.js:26 ~ cardNumber ~ cardNumber:", cardNumber);
    try {
      if (cardNumber.title == 'amex') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'visa') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'mastercard') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'discover') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'jcb') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'diners') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(cardNumber.imagecard, "\">\n   <image class=\"image\" src=\"").concat(mono_mir_namespaceObject, "\"> \n   ");
      }
      if (cardNumber.title == 'mir') {
        return src_image.innerHTML = "\n   <image class=\"image\" src=\"".concat(mono_amex_namespaceObject, "\">\n   <image class=\"image\"src=\"").concat(mono_visa_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_mastercard_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_jcb_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_discover_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(mono_diners_namespaceObject, "\">\n   <image class=\"image\" src=\"").concat(cardNumber.imagecard, "\"> \n   ");
      }
    } catch (info) {
      alert("Нет совпадений");
    }
  });
});
/******/ })()
;