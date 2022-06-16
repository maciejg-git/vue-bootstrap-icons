import { h } from 'vue'
export default {
  $_icon: {
    name: "DeleteClock",
    vendor: "Mdi",
    type: "",
    tags: ["delete","clock"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-delete-clock","innerHTML":"<path d='M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13M23 16C23 19.87 19.87 23 16 23C14.09 23 12.36 22.24 11.1 21H8C6.9 21 6 20.1 6 19V7H18V9.29C20.89 10.15 23 12.83 23 16M16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11M19 4V6H5V4H8.5L9.5 3H14.5L15.5 4H19Z' />"
      }
    )
  }
}