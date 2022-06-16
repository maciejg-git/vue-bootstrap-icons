import { h } from 'vue'
export default {
  $_icon: {
    name: "Registered",
    vendor: "Fa",
    type: "Solid",
    tags: ["registered"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-registered","innerHTML":"<path d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM349.8 349.8c5.594 12.03 .4375 26.31-11.56 31.94c-3.312 1.531-6.75 2.25-10.19 2.25c-9 0-17.66-5.125-21.75-13.81l-38.46-82.19H208v72c0 13.25-10.75 24-24 24s-24-10.75-24-24V152c0-13.25 10.75-24 24-24l88 .0044c44.13 0 80 35.88 80 80c0 28.32-14.87 53.09-37.12 67.31L349.8 349.8zM272 176h-64v64h64c17.66 0 32-14.34 32-32S289.7 176 272 176z'/>"
      }
    )
  }
}