import { h } from 'vue'
export default {
  name: "AlertOctagon",
  vendor: "Mdi",
  tags: ["alert","octagon"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-alert-octagon","innerHTML":"<path d='M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z' />"},
    )
  }
}