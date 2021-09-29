import { h } from 'vue'
export default {
  name: "WalletFill",
  vendor: "Ph",
  tags: ["wallet","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-wallet-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24.0275,24.0275,0,0,0,32,64V192a24.0275,24.0275,0,0,0,24,24H216a16.01833,16.01833,0,0,0,16-16V88A16.01833,16.01833,0,0,0,216,72Zm-36,84a12,12,0,1,1,12-12A12,12,0,0,1,180,156Z'/>"},
    )
  }
}