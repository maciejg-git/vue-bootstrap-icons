import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldCrown",
    vendor: "Mdi",
    type: "",
    tags: ["shield","crown"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shield-crown","innerHTML":"<path d='M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1M16 14H8V15.5C8 15.77 8.19 15.96 8.47 16L8.57 16H15.43C15.74 16 15.95 15.84 16 15.59L16 15.5V14M17 8L17 8L14.33 10.67L12 8.34L9.67 10.67L7 8L7 8L8 13H16L17 8Z' />"
      }
    )
  }
}