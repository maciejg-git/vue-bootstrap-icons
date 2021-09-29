import { h } from 'vue'
export default {
  name: "HeartSettings",
  vendor: "Mdi",
  tags: ["heart","settings"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-heart-settings","innerHTML":"<path d='M15 22H17V24H15V22M11 24H13V22H11V24M7 24H9V22H7V24M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z' />"},
    )
  }
}