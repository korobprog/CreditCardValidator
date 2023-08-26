const cardNumberFormats = [
   { title: "amex", startsWith: [34, 37], length: [15] },
   { title: "visa", startsWith: [4], length: [13, 16, 19] },
   { title: "discover", startsWith: [51, 52, 53, 54, 55, ...Array.from(Array(49999).keys(), x => x + 222100)], length: [16, 17, 18, 19] },
   { title: "mastercard", startsWith: [65, 611, 644, 645, 646, 647, 648, 649, ...Array.from(Array(799).keys(), x => x + 622126)], length: [16] },
   { title: "jsb", startsWith: [...Array.from(Array(61).keys(), x => x + 3528)], length: [16, 17, 18, 19] },
   { title: "diners", startsWith: [54, 36, 300, 301, 302, 303, 304, 305, ...Array.from(Array(61).keys(), x => x + 3528)], length: [14, 15, 16] },
]

export default { cardNumberFormats };