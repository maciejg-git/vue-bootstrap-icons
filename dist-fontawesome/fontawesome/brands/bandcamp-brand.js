import { h } from 'vue'
export default {
  name: "Bandcamp",
  vendor: "Fa",
  type: "Brand",
  tags: ["bandcamp"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"v-icon","fill":"currentColor","data-name":"fa-bandcamp","innerHTML":"<path d='M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z'/>"},
    )
  }
}