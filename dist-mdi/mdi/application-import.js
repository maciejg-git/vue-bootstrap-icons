import { h } from 'vue'
export default {
  name: "ApplicationImport",
  vendor: "Mdi",
  tags: ["application","import"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-application-import","innerHTML":"<path d='M1 12H10.8L8.3 9.5L9.7 8.1L14.6 13L9.7 17.9L8.3 16.5L10.8 14H1V12M21 2H3C1.9 2 1 2.9 1 4V10.1H3V6H21V20H3V16H1V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2' />"},
    )
  }
}