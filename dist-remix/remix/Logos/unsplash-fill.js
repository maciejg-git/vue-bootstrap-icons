import { h } from 'vue'
export default {
  name: "UnsplashFill",
  vendor: "Rx",
  tags: ["unsplash","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-unsplash-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z'/>    </g>"},
    )
  }
}