import { h } from 'vue'
export default {
  name: "BarChartHorizontalFill",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-bar-chart-horizontal-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z'/>    </g>"},
    )
  }
}