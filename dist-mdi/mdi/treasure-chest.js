import { h } from 'vue'
export default {
  $_icon: {
    name: "TreasureChest",
    vendor: "Mdi",
    type: "",
    tags: ["treasure","chest"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-treasure-chest","innerHTML":"<path d='M5,4H19A3,3 0 0,1 22,7V11H15V10H9V11H2V7A3,3 0 0,1 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z' />"
      }
    )
  }
}