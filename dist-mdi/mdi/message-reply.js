import { h } from 'vue'
export default {
  name: "MessageReply",
  vendor: "Mdi",
  tags: ["message","reply"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-message-reply","innerHTML":"<path d='M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z' />"},
    )
  }
}