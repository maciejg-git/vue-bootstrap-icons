import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterEye",
    vendor: "Mdi",
    type: "",
    tags: ["printer","eye"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-printer-eye","innerHTML":"<path d='M9.8 21C9.6 20.6 9.3 20.2 9.2 19.7L8.8 19H8V14H13C14.2 13.4 15.6 13 17 13C18.9 13 20.6 13.6 22 14.6V11C22 9.3 20.7 8 19 8H5C3.3 8 2 9.3 2 11V17H6V21H9.8M19 10C19.6 10 20 10.4 20 11S19.6 12 19 12 18 11.6 18 11 18.4 10 19 10M18 7H6V3H18V7M17 18C17.6 18 18 18.4 18 19S17.6 20 17 20 16 19.6 16 19 16.4 18 17 18M17 15C14.3 15 11.9 16.7 11 19C11.9 21.3 14.3 23 17 23S22.1 21.3 23 19C22.1 16.7 19.7 15 17 15M17 21.5C15.6 21.5 14.5 20.4 14.5 19S15.6 16.5 17 16.5 19.5 17.6 19.5 19 18.4 21.5 17 21.5Z' />"
      }
    )
  }
}