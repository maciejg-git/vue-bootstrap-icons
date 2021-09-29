import { h } from 'vue'
export default {
  name: "Cat",
  vendor: "Ph",
  tags: ["cat"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-cat","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='192' x2='128' y2='224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='84' cy='140' r='12'/>  <circle cx='172' cy='140' r='12'/>  <line x1='128' y1='48' x2='128' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='144 176 128 192 112 176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='96' y1='53.00879' x2='96' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='160' y1='53.00879' x2='160' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M32,136V51.31371a8,8,0,0,1,13.65685-5.65686L67.59832,67.59832l-.0003-.00039a102.88019,102.88019,0,0,1,120.804,0l-.00032.00037,21.94147-21.94147A8,8,0,0,1,224,51.31371V136c0,48.60106-42.98066,88-96,88S32,184.60106,32,136Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}