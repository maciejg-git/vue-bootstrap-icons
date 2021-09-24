import { h } from 'vue'
export default {
  name: "Ticket",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-ticket","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='96' y1='56' x2='96' y2='200' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M24,167.19024a7.98836,7.98836,0,0,1,6.39917-7.83019,32.00785,32.00785,0,0,0,0-62.7201A7.98836,7.98836,0,0,1,24,88.80976V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.80976A7.98836,7.98836,0,0,1,225.60083,96.64a32.00785,32.00785,0,0,0,0,62.7201A7.98836,7.98836,0,0,1,232,167.19024V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}