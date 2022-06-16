import { h } from 'vue'
export default {
  $_icon: {
    name: "Tunnel",
    vendor: "Mdi",
    type: "",
    tags: ["tunnel"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tunnel","innerHTML":"<path d='M12 2C6.5 2 2 6.5 2 12V22H22V12C22 6.5 17.5 2 12 2M7.1 5.69C8.21 4.83 9.54 4.25 11 4.07V6.09C10.09 6.24 9.25 6.6 8.53 7.11L7.1 5.69M15.47 7.11C14.75 6.6 13.91 6.24 13 6.09V4.07C14.46 4.25 15.79 4.83 16.9 5.69L15.47 7.11M5.69 7.1L7.11 8.53C6.6 9.25 6.24 10.09 6.09 11H4.07C4.25 9.54 4.83 8.21 5.69 7.1M6 13V15.5H4V13H6M4 20V17.5H6V20H4M16.89 8.53L18.31 7.1C19.17 8.21 19.75 9.54 19.93 11H17.91C17.76 10.09 17.4 9.25 16.89 8.53M18 13H20V15.5H18V13M18 20V17.5H20V20H18Z' />"
      }
    )
  }
}