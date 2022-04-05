import { h } from 'vue'
export default {
  $_icon: {
    name: "VoteOutline",
    vendor: "Mdi",
    type: "",
    tags: ["vote","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-vote-outline","innerHTML":"<path d='M18,13L21,16V20C21,21.11 20.1,22 19,22H5C3.89,22 3,21.1 3,20V16L6,13H6.83L8.83,15H6.78L5,17H19L17.23,15H15.32L17.32,13H18M19,20V19H5V20H19M11.34,15L6.39,10.07C6,9.68 6,9.05 6.39,8.66L12.76,2.29C13.15,1.9 13.78,1.9 14.16,2.3L19.11,7.25C19.5,7.64 19.5,8.27 19.11,8.66L12.75,15C12.36,15.41 11.73,15.41 11.34,15M13.46,4.41L8.5,9.36L12.05,12.9L17,7.95L13.46,4.41Z' />"},
    )
  }
}