import { h } from 'vue'
export default {
  name: "Paragraph",
  vendor: "Rx",
  tags: ["paragraph"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-paragraph","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z'/>    </g>"},
    )
  }
}