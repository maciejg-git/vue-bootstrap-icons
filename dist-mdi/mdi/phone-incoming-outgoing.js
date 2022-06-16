import { h } from 'vue'
export default {
  $_icon: {
    name: "PhoneIncomingOutgoing",
    vendor: "Mdi",
    type: "",
    tags: ["phone","incoming","outgoing"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-phone-incoming-outgoing","innerHTML":"<path d='M20 17.5V21C20 21.55 19.55 22 19 22C9.61 22 2 14.39 2 5C2 4.45 2.45 4 3 4H6.5C7.05 4 7.5 4.45 7.5 5C7.5 6.25 7.7 7.45 8.07 8.57C8.18 8.92 8.1 9.31 7.82 9.57L5.62 11.78C7.06 14.62 9.38 16.93 12.21 18.37L14.41 16.17C14.69 15.9 15.08 15.82 15.43 15.93C16.55 16.3 17.75 16.5 19 16.5C19.55 16.5 20 16.95 20 17.5M16 7.5H12.5L18 2L17 1L11.5 6.5V3H10V9H16V7.5M17 6V7.5H20.5L15 13L16 14L21.5 8.5V12H23V6H17Z' />"
      }
    )
  }
}