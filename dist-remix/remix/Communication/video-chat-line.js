import { h } from 'vue'
export default {
  name: "VideoChatLine",
  vendor: "Rx",
  tags: ["video","chat","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-video-chat-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M14 10.25L17 8v6l-3-2.25V14H7V8h7v2.25zM5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z'/>    </g>"},
    )
  }
}