import { h } from 'vue'
export default {
  $_icon: {
    name: "BankOff",
    vendor: "Mdi",
    type: "",
    tags: ["bank","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bank-off","innerHTML":"<path d='M11.2 8L6.89 3.69L12 1L21.5 6V8H11.2M19.5 16.3V10H16.5V13.3L19.5 16.3M21.5 20.85V20.84L19.66 19H19.65L17.65 17H17.66L16.5 15.84V15.85L13.5 12.85V12.84L10.66 10H10.66L8.66 8H8.66L2.39 1.73L1.11 3L3.56 5.45L2.5 6V8H6.11L10.5 12.39V17H13.5V15.39L17.11 19H2.5V22H20.11L20.84 22.73L22.11 21.46L21.5 20.85M4.5 10V17H7.5V10H4.5Z' />"},
    )
  }
}