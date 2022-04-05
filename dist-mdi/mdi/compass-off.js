import { h } from 'vue'
export default {
  $_icon: {
    name: "CompassOff",
    vendor: "Mdi",
    type: "",
    tags: ["compass","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-compass-off","innerHTML":"<path d='M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22A10,10 0 0,1 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M6,18L12.47,15L9,11.53L6,18M18,6L11.56,9L6.33,3.76C7.94,2.65 9.9,2 12,2A10,10 0 0,1 22,12C22,14.1 21.35,16.06 20.24,17.67L15,12.44L18,6Z' />"},
    )
  }
}