import { h } from 'vue'
export default {
  name: "CheckboxBlankBadge",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-checkbox-blank-badge","innerHTML":"<path d='M23 4.5C23 6.43 21.43 8 19.5 8S16 6.43 16 4.5 17.57 1 19.5 1 23 2.57 23 4.5M19.5 10C16.47 10 14 7.53 14 4.5C14 4 14.08 3.5 14.21 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V9.79C20.5 9.92 20 10 19.5 10Z' />"},
    )
  }
}