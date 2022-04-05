import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeBatteryOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","battery","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-battery-outline","innerHTML":"<path d='M20.7 9H20V7.5H16V9H15.3C14.6 9 14 9.6 14 10.3V20.6C14 21.3 14.6 21.9 15.3 21.9H20.6C21.3 21.9 21.9 21.3 21.9 20.6V10.3C22 9.6 21.4 9 20.7 9M20 14H16V11H20V14M4 21V12H2L12 2L16 6H14.5V7.5L12 5L6 11V19H12.5V21H4Z' />"},
    )
  }
}