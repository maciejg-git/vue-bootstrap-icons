import { h } from 'vue'
export default {
  $_icon: {
    name: "NfcTap",
    vendor: "Mdi",
    type: "",
    tags: ["nfc","tap"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-nfc-tap","innerHTML":"<path d='M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M4,4H11A2,2 0 0,1 13,6V9H11V6H4V11H6V9L9,12L6,15V13H4A2,2 0 0,1 2,11V6A2,2 0 0,1 4,4M20,20H13A2,2 0 0,1 11,18V15H13V18H20V13H18V15L15,12L18,9V11H20A2,2 0 0,1 22,13V18A2,2 0 0,1 20,20Z' />"},
    )
  }
}