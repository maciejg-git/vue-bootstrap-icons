import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldSword",
    vendor: "Mdi",
    type: "",
    tags: ["shield","sword"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shield-sword","innerHTML":"<path d='M12 1L3 5V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V5L12 1M15 15H13V18H11V15H9V13H11L10 7.1L12 5.5L14 7.1L13 13H15V15Z' />"},
    )
  }
}