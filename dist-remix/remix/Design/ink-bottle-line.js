import { h } from 'vue'
export default {
  name: "InkBottleLine",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-ink-bottle-line","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M16 9l4.371 1.749c.38.151.629.52.629.928V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm-.385 2h-7.23L5 12.354V20h14v-1H8v-5h11v-1.646L15.615 11zM16 3c.552 0 1 .448 1 1v4H7V4c0-.552.448-1 1-1h8zm-1 2H9v1h6V5z'/>    </g>"},
    )
  }
}