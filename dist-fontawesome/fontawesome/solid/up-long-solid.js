import { h } from 'vue'
export default {
  $_icon: {
    name: "UpLong",
    vendor: "Fa",
    type: "Solid",
    tags: ["up","long"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-up-long","innerHTML":"<path d='M285.1 145.7c-3.81 8.758-12.45 14.42-21.1 14.42L192 160.1V480c0 17.69-14.33 32-32 32s-32-14.31-32-32V160.1L55.1 160.1c-9.547 0-18.19-5.658-22-14.42c-3.811-8.758-2.076-18.95 4.408-25.94l104-112.1c9.498-10.24 25.69-10.24 35.19 0l104 112.1C288.1 126.7 289.8 136.9 285.1 145.7z'/>"
      }
    )
  }
}