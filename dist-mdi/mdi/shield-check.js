import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldCheck",
    vendor: "Mdi",
    type: "",
    tags: ["shield","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shield-check","innerHTML":"<path d='M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z' />"},
    )
  }
}