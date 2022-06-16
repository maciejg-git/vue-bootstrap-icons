import { h } from 'vue'
export default {
  $_icon: {
    name: "BasketOff",
    vendor: "Mdi",
    type: "",
    tags: ["basket","off"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-basket-off","innerHTML":"<path d='M23 10L22.96 10.29L20.9 17.7L12.2 9H15L12 4.74L10.32 7.12L8.89 5.69L11.18 2.43C11.36 2.17 11.66 2 12 2S12.65 2.17 12.83 2.44L17.42 9H22C22.55 9 23 9.45 23 10M22.11 21.46L20.84 22.73L19.03 20.92C18.86 20.97 18.68 21 18.5 21H5.5C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 10C1 9.45 1.45 9 2 9H6.58L6.8 8.69L1.11 3L2.39 1.73L22.11 21.46M13.85 15.74L11.26 13.15C10.5 13.44 10 14.16 10 15C10 16.11 10.9 17 12 17C12.84 17 13.56 16.5 13.85 15.74Z' />"
      }
    )
  }
}