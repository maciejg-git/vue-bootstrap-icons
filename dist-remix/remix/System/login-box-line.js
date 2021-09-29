import { h } from 'vue'
export default {
  name: "LoginBoxLine",
  vendor: "Rx",
  tags: ["login","box","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-login-box-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z'/>    </g>"},
    )
  }
}