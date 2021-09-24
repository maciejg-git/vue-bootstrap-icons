import { h } from 'vue'
export default {
  name: "Waterfall",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-waterfall","innerHTML":"<path d='M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16M22 2H2V4H6V16H18V4H22M9 4H11V10H9M13 8H15V14H13Z' />"},
    )
  }
}