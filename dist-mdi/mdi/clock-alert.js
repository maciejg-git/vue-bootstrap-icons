import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockAlert",
    vendor: "Mdi",
    type: "",
    tags: ["clock","alert"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clock-alert","innerHTML":"<path d='M20 12H22V18H20V12M20 20H22V22H20V20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22C14.3 22 16.3 21.2 18 20V10H21.8C20.9 5.4 16.8 2 12 2M16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z' />"
      }
    )
  }
}