import { h } from 'vue'
export default {
  $_icon: {
    name: "BasketUnfill",
    vendor: "Mdi",
    type: "",
    tags: ["basket","unfill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-basket-unfill","innerHTML":"<path d='M3,10H6V7H3V10M5,5H8V2H5V5M8,10H11V7H8V10M17,1L12,6H15V10H19V6H22L17,1M7.5,22C6.72,22 6.04,21.55 5.71,20.9V20.9L3.1,13.44L3,13A1,1 0 0,1 4,12H20A1,1 0 0,1 21,13L20.96,13.29L18.29,20.9C17.96,21.55 17.28,22 16.5,22H7.5M7.61,20H16.39L18.57,14H5.42L7.61,20Z' />"},
    )
  }
}