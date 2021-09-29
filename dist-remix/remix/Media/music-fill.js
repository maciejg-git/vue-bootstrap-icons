import { h } from 'vue'
export default {
  name: "MusicFill",
  vendor: "Rx",
  tags: ["music","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-music-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z'/>    </g>"},
    )
  }
}