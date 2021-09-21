import { h } from 'vue'
export default {
  name: "TrainCarPassengerDoor",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-train-car-passenger-door" },
      [ h("path", { "d": "M21 7H3C1.9 7 1 7.9 1 9V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V9C23 7.9 22.11 7 21 7M7 12H3V9H7V12M11 16H9V9H11V16M15 16H13V9H15V16M21 12H17V9H21V12Z" }) ]
    )
  }
}