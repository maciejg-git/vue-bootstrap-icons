import { h } from 'vue'
export default {
  $_icon: {
    name: "Phone",
    vendor: "B",
    type: "",
    tags: ["phone"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-phone","innerHTML":"<path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'/>  <path d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/>"
      }
    )
  }
}