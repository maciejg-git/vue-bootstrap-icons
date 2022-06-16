import { h } from 'vue'
export default {
  $_icon: {
    name: "Dice1",
    vendor: "B",
    type: "",
    tags: ["dice","1"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-dice-1","innerHTML":"<circle cx='8' cy='8' r='1.5'/>  <path d='M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z'/>"
      }
    )
  }
}