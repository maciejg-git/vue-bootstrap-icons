import { h } from 'vue'
export default {
  name: "CreditCardFast",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-credit-card-fast" },
      [ h("path", { "d": "M3 8C2.45 8 2 7.55 2 7S2.45 6 3 6H5.54C5.19 6.6 5 7.29 5 8H3M5 13H2C1.45 13 1 12.55 1 12S1.45 11 2 11H5V13M1 18C.448 18 0 17.55 0 17S.448 16 1 16H5C5 16.71 5.19 17.4 5.54 18H1M21 6H9C7.89 6 7 6.89 7 8V16C7 17.11 7.89 18 9 18H21C22.11 18 23 17.11 23 16V8C23 6.89 22.11 6 21 6M21 12H9V9H21V12Z" }) ]
    )
  }
}