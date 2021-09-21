import { h } from 'vue'
export default {
  name: "HomeBattery",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-home-battery" },
      [ h("path", { "d": "M14.5 7.6C13.3 8 12.5 9 12.5 10.3V20H5V12H2L12 3L15.3 6H14.5V7.6M21.9 10.3V20.6C21.9 21.3 21.3 21.9 20.6 21.9H15.3C14.6 21.9 14 21.3 14 20.6V10.3C14 9.6 14.6 9 15.3 9H16V7.5H20V9H20.7C21.4 9 22 9.6 21.9 10.3M20 11H16V14H20V11Z" }) ]
    )
  }
}