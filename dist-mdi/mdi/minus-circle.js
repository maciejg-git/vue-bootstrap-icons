import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusCircle",
    vendor: "Mdi",
    type: "",
    tags: ["minus","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-minus-circle","innerHTML":"<path d='M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />"},
    )
  }
}