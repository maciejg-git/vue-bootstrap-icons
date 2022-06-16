import { h } from 'vue'
export default {
  $_icon: {
    name: "TurnstileOutline",
    vendor: "Mdi",
    type: "",
    tags: ["turnstile","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-turnstile-outline","innerHTML":"<path d='M13.41,10.41C13.04,10.79 12.53,11 12,11A2,2 0 0,1 10,9C10,8.47 10.21,7.96 10.59,7.59L9.17,6.17C8.42,6.92 8,7.94 8,9H2V11H8.55C8.9,11.6 9.4,12.1 10,12.45V19H12V13C13.06,13 14.08,12.58 14.83,11.83L13.41,10.41M10,2V5L16,11V22H22V2H10M20,20H18V10.17L12,4.17V4H20V20Z' />"
      }
    )
  }
}