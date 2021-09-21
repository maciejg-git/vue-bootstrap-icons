import { h } from 'vue'
export default {
  name: "TrainVariant",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-train-variant" },
      [ h("path", { "d": "M18,10H6V5H18M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M4,15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V5C20,1.5 16.42,1 12,1C7.58,1 4,1.5 4,5V15.5Z" }) ]
    )
  }
}