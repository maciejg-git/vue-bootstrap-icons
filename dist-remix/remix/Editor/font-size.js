import { h } from 'vue'
export default {
  name: "FontSize",
  vendor: "Rx",
  tags: ["font","size"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-font-size","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/>    </g>"},
    )
  }
}