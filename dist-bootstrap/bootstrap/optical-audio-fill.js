import { h } from 'vue'
export default {
  $_icon: {
    name: "OpticalAudioFill",
    vendor: "B",
    type: "",
    tags: ["optical","audio","fill"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-optical-audio-fill","innerHTML":"<path d='M8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z'/>  <path d='M2.5 15a.5.5 0 0 1-.5-.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 4.5 2h7a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a.5.5 0 0 1-.5.5h-11ZM8 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z'/>"
      }
    )
  }
}