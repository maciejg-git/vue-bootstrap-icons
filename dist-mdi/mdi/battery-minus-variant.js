import { h } from 'vue'
export default {
  name: "BatteryMinusVariant",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-battery-minus-variant" },
      [ h("path", { "d": "M16.67,4C17.4,4 18,4.6 18,5.33V20.67A1.33,1.33 0 0,1 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33A1.33,1.33 0 0,1 7.33,4H9V2H15V4H16.67M8,12V14H16V12" }) ]
    )
  }
}