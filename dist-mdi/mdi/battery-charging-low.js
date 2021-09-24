import { h } from 'vue'
export default {
  name: "BatteryChargingLow",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-battery-charging-low","innerHTML":"<path d='M12 20H4V6H12M12.67 4H11V2H5V4H3.33C2.6 4 2 4.6 2 5.33V20.67C2 21.4 2.6 22 3.33 22H12.67C13.41 22 14 21.41 14 20.67V5.33C14 4.6 13.4 4 12.67 4M11 16H5V19H11V16M23 10H20V3L15 13H18V21' />"},
    )
  }
}