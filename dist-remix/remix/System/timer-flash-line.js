import { h } from 'vue'
export default {
  name: "TimerFlashLine",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-timer-flash-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-8h3l-5 6.5V14H8l5-6.505V12zM8 1h8v2H8V1z'/>    </g>"},
    )
  }
}