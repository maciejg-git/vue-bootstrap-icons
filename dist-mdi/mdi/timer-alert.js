import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerAlert",
    vendor: "Mdi",
    type: "",
    tags: ["timer","alert"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-alert","innerHTML":"<path d='M18.45 5.97C18 5.46 17.55 5 17.04 4.56L15.62 6C14.07 4.74 12.12 4 10 4C5.03 4 1 8.03 1 13S5.03 22 10 22C15 22 19 17.97 19 13C19 10.88 18.26 8.93 17.03 7.39L18.45 5.97M11 14H9V7H11V14M13 3H7V1H13V3M23 7V13H21V7H23M21 15H23V17H21V15Z' />"
      }
    )
  }
}