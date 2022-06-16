import { h } from 'vue'
export default {
  $_icon: {
    name: "FileLock",
    vendor: "Mdi",
    type: "",
    tags: ["file","lock"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-lock","innerHTML":"<path d='M18 13C16.6 13 15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17V15.5C20.8 14.1 19.4 13 18 13M18 14.2C18.8 14.2 19.5 14.7 19.5 15.5V17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12V18.2C12 17.2 12.4 16.5 13 16C13.1 15.9 13.2 15.9 13.2 15.8V15.5C13.2 12.8 15.6 11 18 11C18.7 11 19.4 11.2 20 11.4V8L14 2H6M13 3.5L18.5 9H13V3.5Z' />"
      }
    )
  }
}