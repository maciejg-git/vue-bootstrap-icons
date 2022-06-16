import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageAlert",
    vendor: "Mdi",
    type: "",
    tags: ["message","alert"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-alert","innerHTML":"<path d='M13 11H11V5H13M13 15H11V13H13M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z' />"
      }
    )
  }
}