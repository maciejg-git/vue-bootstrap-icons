import { h } from 'vue'
export default {
  $_icon: {
    name: "DownLong",
    vendor: "Fa",
    type: "Solid",
    tags: ["down","long"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-down-long","innerHTML":"<path d='M281.6 392.3l-104 112.1c-9.498 10.24-25.69 10.24-35.19 0l-104-112.1c-6.484-6.992-8.219-17.18-4.404-25.94c3.811-8.758 12.45-14.42 21.1-14.42H128V32c0-17.69 14.33-32 32-32S192 14.31 192 32v319.9h72c9.547 0 18.19 5.66 22 14.42C289.8 375.1 288.1 385.3 281.6 392.3z'/>"},
    )
  }
}